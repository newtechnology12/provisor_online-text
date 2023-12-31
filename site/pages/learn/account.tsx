import LearnLayout from "../../components/LearnLayout";
import React, { Fragment, useState } from "react";
import { UploadCloud } from "react-feather";
import AppFormField from "../../components/forms/AppFormField";
import AppForm from "../../components/forms/AppForm";
import ClearButton from "../../components/forms/ClearButton";
import SubmitButton from "../../components/forms/SubmitButton";
import AppFormSelect from "../../components/forms/AppFormSelect";
import Loader from "../../components/Loader";
import { Avatar } from "../../components/Avatar";
import AppFormTextArea from "../../components/forms/AppFormTextarea";
import { useAuth } from "../../context/authContext";
import { useToast } from "../../context/toastContext";
import { handleUpload } from "../../utils/handleUpload";
import { AuthServices } from "../../services/auth.service";
import { useDropzone } from "react-dropzone";
import shortid from "shortid";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import AppFormStatus from "../../components/forms/AppFormStatus";
import * as Yup from "yup";
import { NextSeo } from "next-seo";

export default function Account() {
  const { reloadAuth, user }: any = useAuth();

  const toast: any = useToast();
  const [loadingChangeProfile, setloadingChangeProfile] = useState(false);
  const handleChangeProfile = async (file) => {
    setloadingChangeProfile(true);
    await handleUpload({
      file: file,
      key: `users/${user.id}/${shortid.generate()}-${file.name}`,
    })
      .then((e) => {
        return new AuthServices()
          .updateProfile({
            photoURL: e,
          })
          .then((e) => {
            console.log(e);
            reloadAuth();
            setloadingChangeProfile(false);
          })
          .catch((e) => {
            console.log(e);
            setloadingChangeProfile(false);
          });
      })
      .catch((e) => {
        setloadingChangeProfile(false);
        console.log(e.message);
      });
  };

  const onDrop = (acceptedFiles: any) => {
    handleChangeProfile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: 2097152,
    accept: "image/jpeg, image/png",
  });

  const handleSubmit = async (values: any, { setSubmitting, setStatus }) => {
    console.log(values);
    function clean(obj) {
      for (var propName in obj) {
        if (
          obj[propName] === null ||
          obj[propName] === undefined ||
          obj[propName] === ""
        ) {
          delete obj[propName];
        }
      }
      return obj;
    }

    await new AuthServices()
      .updateProfile(
        clean({
          displayName: values.username,
        })
      )
      .then(() => {
        reloadAuth();
        toast.show({ title: "profile updated sucessfully" });
        setSubmitting(false);
      })
      .catch((e) => {
        toast.show({ title: e.response.data.message, danger: true });
      });
  };

  return (
    <div>
      <NextSeo title="Konte yange" />
      {user ? (
        <div className="max-w-6xl mx-auto my-0">
          <AppForm
            initialValues={{
              username: user.username || "",
              phone: user.phone || "",
            }}
            onSubmit={handleSubmit}
          >
            <div className="flex mt-2 items-center justify-between">
              <div>
                <h2 className="mb-1 text-[17px] capitalize sm:mb-0">
                  Imyirondoro yawe
                </h2>
                <p className="text-[15px] leading-7 sm:hidden font-medium text-gray-500">
                  Ushobora kuba wahindura ifoto yawe hamwe nimyirondoro yawe
                </p>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="card mt-4 mb-10">
                  <div className="card-head">
                    <h4 className="card-title text-sm">
                      <span className="text-sm">Imyirondoro yawe</span>
                    </h4>
                  </div>

                  <div className="card-body ">
                    <AppFormField
                      name="username"
                      // disabled
                      placeholder="Amazina"
                      label={"Amazina yawe"}
                    />
                  </div>

                  <div className="card-footer">
                    <SubmitButton small>Hindura</SubmitButton>
                  </div>
                </div>
              </div>
            </div>
          </AppForm>
        </div>
      ) : (
        <div className="h-screen"></div>
      )}
    </div>
  );
}
