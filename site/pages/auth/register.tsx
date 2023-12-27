import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Yup from "yup";
import Checkbox from "../../components/Checkbox";
import SocialIcon from "../../components/SocialIcon";
import AppForm from "../../components/forms/AppForm";
import AppFormPhoneNumber from "../../components/forms/AppFormPhoneNumber";
import SubmitButton from "../../components/forms/SubmitButton";
import { useToast } from "../../context/toastContext";
import { AuthServices } from "../../services/auth.service";

export default function SignUp() {
  const registerSchema = Yup.object().shape({
    phone: Yup.string()
      .required()
      .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, {
        message: "nimero yawe yanditse nabi",
      }),
  });

  const router = useRouter();

  const redirect_url = router.query?.redirect_url;

  const toast: any = useToast();

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

  return (
    <div className={`max-w-[430px] mt-20 px-3 sm:pt-2 bg-white mx-auto`}>
      <AppForm
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
        initialValues={{ phone: "" }}
      >
        <div>
          <div className="text-center mb-5">
            <h4 className="font-bold mb-2 text-gray-800 text-[16px]">
              Ushaka Gufunguza Konti?
            </h4>
            <p className="font-semibold text-gray-400 text-[13px]">
              Shyiramo nimero ya telephone yawe?
            </p>
          </div>
          <div>
            <div className="mb-3">
              <div className="mb-3">
                <AppFormPhoneNumber
                  name="phone"
                  placeholder="nimero ya telephone"
                  label="nimero"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between my-4">
            <Checkbox id="register" label="Kwemera amategeko namabwiriza" />
            <div />
          </div>
          <SubmitButton className="bg-[#fca103] hover:bg-[#d98b03] text-white">
            Ohereza kode kuri telephone
          </SubmitButton>{" "}
          <div className="flex justify-center or items-center text-gray-600 my-4">
            <span className="text-sm mx-2 font-semibold">Cyangwa</span>
          </div>
          <SocialIcon
            onClick={() => {
              handleGoogleLogin();
            }}
            loading={googleLoading}
            className="mr-4"
            Icon={() => (
              <svg
                width="17px"
                height="17px"
                viewBox="0 0 20 20"
                version="1.1"
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                {/* ... (Google SVG path) */}
              </svg>
            )}
          >
            Injira Na Google
          </SocialIcon>
          <div className="text-center mt-3">
            <span className="text-sm font-semibold text-gray-600 mt-2">
              usanzwe ufite konte ?
              <Link href="/auth/login">
                <a className="ml-2">
                  <b>injira</b>
                </a>
              </Link>
            </span>
          </div>
        </div>
      </AppForm>
      <div id="recaptcha-container"></div>
    </div>
  );
}
