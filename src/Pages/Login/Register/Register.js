import React, { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Register.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container w-50 mx-auto mt-5 mb-3 register-form">
      <h2 className="text-center my-5">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Name" />
        <br />
        <input type="email" name="email" id="" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <br />
        <input
          onClick={() => setAgree(!agree)}
          className="me-2"
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={agree ? "text-primary" : "text-danger"}
          htmlFor="terms"
        >
          Accept Terms and Conditions
        </label>
        <br />
        <input
          disabled={!agree}
          className={`${
            agree ? "bg-primary" : "bg-dark bg-opacity-25"
          } text-white border-0 w-50 mx-auto mt-3`}
          type="submit"
          value="Register"
        />
      </Form>
      <br />
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary text-decoration-none"
          onClick={navigateLogin}
        >
          Login Here
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
