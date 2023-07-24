import React from "react";
import { NextSeo } from "next-seo";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppFormTextArea from "../components/forms/AppFormTextarea";
import SubmitButton from "../components/forms/SubmitButton";
import {
  Facebook,
  Globe,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Search,
  Shuffle,
  Twitter,
  Youtube,
} from "react-feather";
import * as Yup from "yup";
import AppFormStatus from "../components/forms/AppFormStatus";
import { useToast } from "../context/toastContext";
import Button from "../components/Button";

export default function Contact() {
  const contactShema = Yup.object().shape({
    email: Yup.string()
      .email("Your Email Field Is Invalid")
      .required("Email is required"),
    first_name: Yup.string().required("first name is required"),
    last_name: Yup.string().required("last name is required"),
    phone: Yup.string().required("phone is required"),
    message: Yup.string().required("message is required"),
  });

  const toast: any = useToast();

  const handleSubmit = (
    values,
    { resetForm, setSubmitting, setErrors, setStatus }
  ) => {};

  return (
    <div className="lg:px-3 mb-10 pt-4">
      <NextSeo
        title={"Twandikire"}
        description="Reka tumenye niba haricyo utekereza mubyo utwandikira."
      />{" "}
      <div className="mt-0 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center md:mt-5 mt-10 text-center flex-col mb-5">
            <h3 className="font-bold text-xl mb-2 md:text-lg text-gray-900">
              Twandikire
            </h3>
            <p className="text-gray-500 font-semibold text-sm">
              Reka tumenye niba haricyo utekereza mubyo utwandikira.
            </p>
          </div>
          <div>
            <div className="bg-white mb-5 max-w-5xl border-gray-200 border rounded-md mt-6">
              <div className="GlobalComponents__CardBody-sc-2fcp9h-13 ZXwGj">
                <div className="grid grid-cols-3 sm:grid-cols-1">
                  <div
                    style={{ backgroundImage: "url('images/bub.svg')" }}
                    className="bg-primary bg-cover bg-center m-3 rounded-md p-4 text-white"
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <div className="mb-30">
                          <h4 className="font-bold text-white mb-2">
                            Imyirondoro yacu.
                          </h4>
                          <p className="text-white text-sm">
                            Reka tumenye niba hari icyo utekereza mu byo
                            utwandikira.
                          </p>
                        </div>
                        <ul className="mt-10 text-white">
                          <li>
                            <a
                              href=""
                              className="flex items-center text-sm my-4 font-semibold"
                            >
                              <Phone size={15} className="mr-3" />
                              +250 789 117 171
                            </a>
                          </li>
                          <li>
                            <a
                              href=""
                              className="flex items-center text-sm my-4 font-semibold"
                            >
                              <Mail size={15} className="mr-3" />
                              nockiradrivingschool@gmail.com
                            </a>
                          </li>
                          <li>
                            <a
                              href=""
                              className="flex items-center text-sm my-4 font-semibold"
                            >
                              <MapPin size={15} className="mr-3" />
                              Rwanda
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-sm my-4 font-semibold"
                            >
                              <Globe size={15} className="mr-3" />
                              www.nockira.com
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex py-2 mt-4 ">
                        <a
                          href="https://linkedin.com/Nockira"
                          target="__blank"
                          className="pr-3"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href="https://www.instagram.com/Nockira"
                          target="__blank"
                          className="px-3"
                        >
                          <Instagram size={18} />
                        </a>
                        <a
                          href="https://twitter.com/Nockira"
                          target="__blank"
                          className="px-3"
                        >
                          <Twitter size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 mt-2">
                    <div className="px-5 py-2 md:px-3">
                      <AppForm
                        onSubmit={handleSubmit}
                        initialValues={{
                          first_name: "",
                          last_name: "",
                          email: "",
                          phone: "",
                          message: "",
                        }}
                        validationSchema={contactShema}
                      >
                        <AppFormStatus />
                        <div className="grid sm:grid-cols-1 grid-cols-2 gap-3">
                          <div>
                            <AppFormField
                              label="First name"
                              placeholder="First name"
                              name="first_name"
                            />
                          </div>
                          <div>
                            <AppFormField
                              label="Last name"
                              placeholder="Last name"
                              name="last_name"
                            />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-1 grid-cols-2 gap-3">
                          <div>
                            <AppFormField
                              label="Email Address"
                              placeholder="Enter Your Email"
                              name="email"
                            />
                          </div>
                          <div>
                            <AppFormField
                              label="phone(optional)"
                              placeholder="Enter Your phone"
                              name="phone"
                            />
                          </div>
                        </div>
                        <div>
                          <div>
                            <AppFormTextArea
                              label="Your message"
                              placeholder="Enter Your Message"
                              name="message"
                              rows={6}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex mt-3 mb-4">
                            <SubmitButton>Ohereza ubutumwa</SubmitButton>
                          </div>
                        </div>
                      </AppForm>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
