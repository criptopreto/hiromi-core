import React, { useState } from "react";
import { useHistory } from "react-router";
import logo from "../logo.svg";
import Layout from "../components/Layout";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Index() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [textPedir, setTextPedir] = useState("¡Pedir Ya!");
  const history = useHistory();
  async function GoogleReCaptcha() {
    setTextPedir("Cargando...");
    executeRecaptcha("products")
      .then((tok) => {
        setTextPedir("¡Pedir Ya!");
        history.push("/products");
      })
      .catch(() => {
        setTextPedir("¡Pedir Ya!");
      });
  }

  return (
    <Layout>
      <div className="h-full flex flex-col justify-between p-14 max-w-2xl mx-auto">
        <div className="flex flex-col align-middle h-full">
          <p className="m-auto">
            <img src={logo} alt="Hiromi" className="h-96 md:h-100" />
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center px-5 py-4 border border-transparent shadow-hiromi text-base font-medium rounded-full bg-gradient-to-r from-primary to-secondary hover:bg-indigo-600  text-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center"
          onClick={GoogleReCaptcha}
        >
          <span className="w-full text-lg font-bold text-center">
            {textPedir}
          </span>
        </button>
      </div>
    </Layout>
  );
}
