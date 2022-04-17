import React from "react";
import google from "../../../images//social/google-logo.png";
import facebook from "../../../images//social/facebook-logo.png";
import github from "../../../images//social/github-logo.png";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if (errorGoogle || errorGithub) {
    errorElement = (
      <p className="text-danger">
        Error: {errorGoogle?.message} {errorGithub?.message}
      </p>
    );
  }

  if (userGoogle || userGithub) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px" }}
          className="w-50 bg-dark bg-opacity-25 mb-3"
        ></div>
        <p className="mx-3">or</p>
        <div
          style={{ height: "1px" }}
          className="w-50 bg-dark bg-opacity-25 mb-3"
        ></div>
      </div>
      <p className="text-center">{errorElement}</p>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-light border border-2 w-50 d-flex align-items-center justify-content-center gap-2 mx-auto my-3"
        >
          <img style={{ width: "30px" }} className="" src={google} alt="" />
          Continue with Google
        </button>
        <button className="btn btn-light border border-2 w-50 d-flex align-items-center justify-content-center gap-2 mx-auto my-3">
          <img style={{ width: "30px" }} className="" src={facebook} alt="" />
          Continue with Facebook
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-light border border-2 w-50 d-flex align-items-center justify-content-center gap-2 mx-auto my-3"
        >
          <img style={{ width: "30px" }} className="" src={github} alt="" />
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
