import React from "react";
import * as Yup from "yup";
import style from "./index.module.scss";
import authImage from "../../../assets/images/sign-in-image.svg";
import logoIcon from "../../../assets/icons/logo.svg";
import lendsqr from "../../../assets/icons/lendsqr.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginType } from "../types/LoginInterface";
import { FormRowGroup } from "../../../components/Form-row";
import Button from "../../../components/Button";
import Validators from "../../../utils/validators";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialValues: LoginType = {
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const validationScheme = Yup.object({
    email: Validators.validateEmail(true),
    password: Validators.validatePassword(false, true),
  });

  return (
    <div className={style["login--container"]}>
      <div className={style["login--container__left"]}>
        <div className={style["logo"]}>
          <img src={logoIcon} alt="lendsqr-union" />
          <img src={lendsqr} alt="lendsqr-text" />
        </div>
        <div className={style["auth--image"]}>
          <img src={authImage} alt="pablo-sign-iin" />
        </div>
      </div>
      <div className={style["login--container__right"]}>
        <div className={style["form--container"]}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationScheme}
              onSubmit={(values, actions) => {
                actions.setSubmitting(true);

                setTimeout(() => {
                  navigate("/dashboard/users");
                }, 3000);
              }}
            >
              {({ errors, isSubmitting }) => (
                <Form>
                  <div className={style["form--fields"]}>
                    <FormRowGroup>
                      <Field name="email" placeholder="Email" type="text" />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="error"
                      />
                    </FormRowGroup>
                    <FormRowGroup>
                      <Field
                        name="password"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                      />{" "}
                      <span
                        onClick={handleToggle}
                        className={style["toggle--password"]}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </span>
                      <ErrorMessage
                        name="password"
                        component="span"
                        className="error"
                      />
                    </FormRowGroup>
                  </div>
                  <p className={style["forgot--password"]}>Forgot Password?</p>
                  <Button type="submit" className="large--filled">
                    {isSubmitting ? <BeatLoader color="#fff" /> : "LOG IN"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
