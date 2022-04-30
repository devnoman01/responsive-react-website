import React, { useRef, useEffect } from "react";
import { Button, Form, FormText } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    await signInWithEmailAndPassword(email, password);

    const { data } = await axios.post(
      "https://safe-coast-26904.herokuapp.com/login",
      { email }
    );
    console.log(data);
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  useEffect(() => {
    if (user) {
    }
  });

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const navigateRegister = () => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Reset Password Request Sent!");
    } else {
      toast("Please enter email");
    }
  };

  return (
    <div className="container w-50 mx-auto mt-5 mb-3">
      <h2 className="text-center my-5">Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <FormText>{errorElement}</FormText>
        <Button variant="primary w-50 mx-auto d-block" type="submit">
          Login
        </Button>
      </Form>
      <br />
      <p>
        Forgot Password?{" "}
        <button
          className="btn btn-link text-primary text-decoration-none border-0 p-0 m-0"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      <p>
        New To Genius Car?{" "}
        <Link
          to="/register"
          className="text-primary text-decoration-none"
          onClick={navigateRegister}
        >
          Register Here
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
