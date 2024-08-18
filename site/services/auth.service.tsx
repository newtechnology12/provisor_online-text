import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  OAuthProvider,
  PhoneAuthProvider,
  reauthenticateWithCredential,
  RecaptchaVerifier,
  sendPasswordResetEmail,
  signInWithCredential,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
  verifyPasswordResetCode,
  User
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "../config/firebase";
import { firebaseApp } from "../config/firebase";

export class AuthServices {
  createAccount = async ({ email, password, username }: { email: string; password: string; username: string }): Promise<void> => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: username });
    } catch (error: any) {
      throw new Error(error.code);
    }
  };

  signIn = async ({ email, password }: { email: string; password: string }): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      throw new Error(error.code);
    }
  };

  signInWithPhone = async ({ phone }: { phone: string }): Promise<any> => {
    try {
      const auth = getAuth(firebaseApp);
      
      const appVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: "invisible",
        callback: () => {}
      }, auth);

      return await signInWithPhoneNumber(auth, phone, appVerifier);
    } catch (error: any) {
      throw new Error(error.code || error.message);
    }
  };

  confirmPhone = async ({ code, verificationId }: { code: string; verificationId: string }): Promise<User> => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, code);
      const result = await signInWithCredential(auth, credential);
      return result.user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  getToken = async (): Promise<string> => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("No user logged in");
      return await getIdToken(user);
    } catch (error: any) {
      throw new Error(error.code);
    }
  };

  sendResetEmail = async ({ email }: { email: string }): Promise<void> => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      throw new Error(error.code);
    }
  };

  logout = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error(error.code);
    }
  };

  signInWithGoogle = async (): Promise<any> => {
    try {
      const googleProvider = new GoogleAuthProvider();
      return await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      throw new Error(error.code);
    }
  };

  signInWithApple = async (): Promise<any> => {
    try {
      const provider = new OAuthProvider("apple.com");
      provider.addScope("email");
      provider.addScope("name");
      return await signInWithPopup(auth, provider);
    } catch (error: any) {
      throw new Error(error.code);
    }
  };

  resetPassword = async (code: string, password: string): Promise<void> => {
    try {
      await verifyPasswordResetCode(auth, code);
      await confirmPasswordReset(auth, code, password);
    } catch (error: any) {
      throw new Error(error.code);
    }
  };

  updateProfile = async (data: { displayName?: string; photoURL?: string }): Promise<void> => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("No user logged in");
      
      const cleanData = this.cleanObject(data);
      await updateProfile(user, cleanData);
    } catch (error: any) {
      throw new Error(error.code);
    }
  };

  changePassword = async ({ new_password, old_password }: { new_password: string; old_password: string }): Promise<void> => {
    try {
      const user = auth.currentUser;
      if (!user || !user.email) throw new Error("No user logged in or email not available");
      
      const credential = EmailAuthProvider.credential(user.email, old_password);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, new_password);
    } catch (error: any) {
      throw new Error(error.code);
    }
  };

  private cleanObject(obj: any): any {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, v]) => v != null)
        .map(([k, v]) => [k, v === Object(v) ? this.cleanObject(v) : v])
    );
  }
}







// import {
//   confirmPasswordReset,
//   createUserWithEmailAndPassword,
//   EmailAuthProvider,
//   getAuth,
//   getIdToken,
//   GoogleAuthProvider,
//   OAuthProvider,
//   PhoneAuthProvider,
//   reauthenticateWithCredential,
//   RecaptchaVerifier,
//   sendPasswordResetEmail,
//   signInWithCredential,
//   signInWithEmailAndPassword,
//   signInWithPhoneNumber,
//   signInWithPopup,
//   signOut,
//   updatePassword,
//   updateProfile,
//   verifyPasswordResetCode,
// } from "firebase/auth";
// import { doc, updateDoc } from "firebase/firestore";
// import { auth, firestore } from "../config/firebase";

// export class AuthServices {
//   createAccount = ({ email, password, username }: any) => {
//     return createUserWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => {
//         return updateProfile(user, { displayName: username })
//           .then((e) => e)
//           .catch((error) => {
//             throw Error(error.code);
//           });
//       })
//       .catch((error) => {
//         throw Error(error.code);
//       });
//   };

//   signIn = ({ email, password }: any) => {
//     return signInWithEmailAndPassword(auth, email, password)
//       .then((e) => e)
//       .catch((error) => {
//         throw Error(error.code);
//       });
//   };

//   // signInWithPhone = ({ phone }: any) => {
//   //   var appVerifier = new RecaptchaVerifier(
//   //     "recaptcha-container",
//   //     {
//   //       size: "invisible",
//   //       callback: () => {},
//   //     },
//   //     auth
//   //   );
//   //   return signInWithPhoneNumber(auth, phone, appVerifier)
//   //     .then((confirmationResult) => {
//   //       return confirmationResult;
//   //     })
//   //     .catch((error) => {
//   //       throw Error(error.code);
//   //     });
//   // };

//   // confirmPhone = ({ code, verificationId }) => {
//   //   var credential = PhoneAuthProvider.credential(verificationId, code);
//   //   return signInWithCredential(auth, credential)
//   //     .then((result) => {
//   //       return result.user;
//   //     })
//   //     .catch((error) => {
//   //       throw Error(error.message);
//   //     });
//   // };

//   // getToken = () => {
//   //   return getIdToken(auth.currentUser)
//   //     .then((e) => e)
//   //     .catch((error) => {
//   //       throw Error(error.code);
//   //     });
//   // };

//   sendResetEmail = ({ email }: any) => {
//     return sendPasswordResetEmail(auth, email)
//       .then((e) => e)
//       .catch((error) => {
//         throw Error(error.code);
//       });
//   };

//   logout = () => {
//     return signOut(auth)
//       .then((e) => e)
//       .catch((error) => {
//         throw Error(error.code);
//       });
//   };

//   signInWithGoogle = async () => {
//     const googleProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth, googleProvider)
//       .then((e) => e)
//       .catch((error) => {
//         throw Error(error.code);
//       });
//   };

//   signInWithApple = async () => {
//     const provider = new OAuthProvider("apple.com");
//     provider.addScope("email");
//     provider.addScope("name");
//     return signInWithPopup(auth, provider)
//       .then((e) => e)
//       .catch((error) => {
//         throw Error(error.code);
//       });
//   };

//   resetPassword = async (code, password) => {
//     return verifyPasswordResetCode(auth, code)
//       .then(function (email) {
//         return confirmPasswordReset(auth, code, password)
//           .then((e) => e)
//           .catch((error) => {
//             throw Error(error.code);
//           });
//       })
//       .catch((error) => {
//         throw Error(error.code);
//       });
//   };

//   updateProfile = async (data) => {
//     function clean(obj) {
//       return Object.fromEntries(
//         Object.entries(obj)
//           .filter(([_, v]) => v != null)
//           .map(([k, v]) => [k, v === Object(v) ? clean(v) : v])
//       );
//     }
//     const user = auth.currentUser;
//     return updateProfile(
//       user,
//       clean({
//         displayName: data.displayName,
//         photoURL: data.photoURL,
//       })
//     )
//       .then((e) => e)
//       .catch((error) => {
//         throw Error(error.code);
//       });
//   };

//   changePassword = async ({ new_password, old_password }) => {
//     const user = auth.currentUser;
//     const credential = EmailAuthProvider.credential(user.email, old_password);
//     return reauthenticateWithCredential(user, credential)
//       .then(() => {
//         return updatePassword(user, new_password)
//           .then((e) => e)
//           .catch((error) => {
//             throw Error(error.code);
//           });
//       })
//       .catch((error) => {
//         throw Error(error.code);
//       });
//   };
// }
