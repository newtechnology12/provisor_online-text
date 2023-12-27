import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import * as Yup from "yup";
import Checkbox from "../../components/Checkbox";
import SocialIcon from "../../components/SocialIcon";
import AppForm from "../../components/forms/AppForm";
import AppFormPhoneNumber from "../../components/forms/AppFormPhoneNumber";
import SubmitButton from "../../components/forms/SubmitButton";
import { useToast } from "../../context/toastContext";
import { AuthServices } from "../../services/auth.service";

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
    <Fragment>
      <NextSeo title="Login" />
      <div className="max-w-[430px] px-4 mt-20 border-opacity-70 sm:pt-0 rounded-md mx-auto bg-white shadow-md p-6">
        <AppForm
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
          initialValues={{ phone: "" }}
        >
          <div>
            <div className="text-center sm:mt-3 mt-5 mb-7">
              <h4 className="font-extrabold text-gray-800 mb-2 text-[17px]">
                Injira kuri konte yawe.
              </h4>
              <p className="font-semibold text-gray-500 text-sm">
                Shyiramo nimero ni ibanga ryawe.
              </p>
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
              <Link href="/terms">
                <a className="text-sm text-[#fca103] font-semibold">
                  Amategeko namabwiriza!
                </a>
              </Link>
            </div>
            <SubmitButton className="bg-[#fca103] hover:bg-[#d98b03] text-white">
              Injira Muri konte
            </SubmitButton>
            <div className="flex justify-center items-center text-gray-600 my-4">
              <span className="text-sm mx-2 font-semibold">Cyangwa</span>
            </div>

            <SocialIcon
              onClick={() => handleGoogleLogin()}
              loading={googleLoading}
              className="mb-4"
              Icon={() => (
                <svg
                  width="17px"
                  height="17px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {/* Google icon paths */}
                </svg>
              )}
            >
              Injira Na Google
            </SocialIcon>

            <div className="text-center mt-3">
              <span className="text-sm font-semibold text-gray-600 mt-2">
                Nta konte ufite ?
                <Link href="/auth/register">
                  <a className="font-bold ml-1 text-gray-700">iyandikishe.</a>
                </Link>
              </span>
            </div>
          </div>
        </AppForm>
      </div>
      <div id="recaptcha-container"></div>
    </Fragment>
  );
}
