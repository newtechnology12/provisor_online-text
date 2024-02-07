import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import * as Yup from "yup";
import Checkbox from "../../components/Checkbox";
import SocialIcon from "../../components/SocialIcon";
import AppForm from "../../components/forms/AppForm";
import AppFormPhoneNumber from "../../components/forms/AppFormPhoneNumber";
import SubmitButton from "../../components/forms/SubmitButton";
import { useToast } from "../../context/toastContext";
import { AuthServices } from "../../services/auth.service";
import { useAuth } from "../../context/authContext";

export default function Login() {
  const loginSchema = Yup.object().shape({
    phone: Yup.string()
      .required()
      .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, {
        message: "nimero yawe yanditse nabi",
      }),
  });

  const router = useRouter();
  const redirect_url = router.query?.redirect_url;
  const toast: any = useToast();

  const { user } = useAuth();

  const handleSubmit = (
    { phone }: any,
    { resetForm, setSubmitting, setErrors, setStatus }: any
  ) => {
    new AuthServices()
      .signInWithPhone({ phone })
      .then((e) => {
        setSubmitting(false);
        if (
          router.query.redirect_url &&
          router.query.redirect_url !== "undefined"
        ) {
          router.push(
            `/auth/verify-phone?redirect_url=${redirect_url}&verificationId=${e.verificationId}&phone=${phone}`
          );
        } else {
          router.push(
            `/auth/verify-phone?verificationId=${e.verificationId}&phone=${phone}`
          );
        }
        resetForm();
      })
      .catch((error) => {
        setSubmitting(false);
        console.log(error);
        toast.show({ title: error.message, danger: true });
      });
  };

  const [googleLoading, setgoogleLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setgoogleLoading(true);
      await new AuthServices()
        .signInWithGoogle()
        .then()
        .then(() => {
          setgoogleLoading(false);
          if (router.query.redirect) {
            router.push(router.query.redirect.toString());
          } else {
            router.push("/learn");
          }
        });
    } catch (error) {
      toast.show({
        title: error.message,
        danger: true,
      });
      setgoogleLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/learn");
    }
  }, []);

  return (
    <div className="h-[87vh] sm:h-full sm:py-0 py-8 bg-slate-50">
      <NextSeo title="Login" />
      <div className="max-w-[430px] px-6 sm:px-4 border-opacity-70  rounded-[4px] border border-slate-200 mx-auto bg-white shadow-md- p-6">
        <AppForm
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
          initialValues={{ phone: "" }}
        >
          <div>
            <div className="text-left sm:mt-3 mt-0 mb-7">
              <h4 className="font-extrabold text-gray-800 mb-2 text-[18px]">
                Injira Muri konte yawe.
              </h4>
              <p className="font-semibold= font-medium text-gray-500 text-[14.5px]">
                Shyiramo nimero ya telefoni, turakohereza code.
              </p>
            </div>

            <div>
              <SocialIcon
                onClick={() => handleGoogleLogin()}
                loading={googleLoading}
                className="mb-4"
                Icon={() => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                    />
                    <path
                      fill="#FF3D00"
                      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                    />
                  </svg>
                )}
              >
                Komeza Na Google
              </SocialIcon>
            </div>
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-b border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white uppercase px-4 font-semibold text-[13px] text-gray-500">
                  OR
                </span>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <AppFormPhoneNumber
                  name="phone"
                  placeholder="Nimero ya telephone"
                  label="Nimero"
                />
              </div>
            </div>
            <div className="flex justify-between items-center my-4">
              <Checkbox id="login" label="Munyibuke" />
              <Link href="#">
                <a className="text-sm hover:underline text-[#fca103] font-medium">
                  Amategeko namabwiriza!
                </a>
              </Link>
            </div>
            <SubmitButton className="bg-[#fca103] hover:bg-[#d98b03] text-white">
              Injira Muri konte
            </SubmitButton>
          </div>
        </AppForm>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
}
