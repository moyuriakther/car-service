import React from "react";
import { Button } from "react-bootstrap";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, error, user] = useSignInWithGoogle(auth);
  const [signInWithFacebook, error1, user1] = useSignInWithFacebook(auth);
  const [signInWithGithub, error2, user2] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error || error1 || error2) {
    errorElement = (
      <p className="text-danger">
        {error?.message} {error1?.message} {error2?.message}
      </p>
    );
  }
  console.log(user, user1, user2, error, error1, error2);
  if (user || user1 || user2) {
    // navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
        <div className="px-2">OR</div>
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
      </div>
      <div className="text-center">
        {errorElement}
        <Button
          onClick={() => signInWithGoogle()}
          className="btn-dark shadow px-5 mt-2"
        >
          <img height="30px" src={google} alt="google" />{" "}
          <span className="px-2"> Sign In With Google</span>
        </Button>{" "}
        <br />
        <Button
          onClick={() => signInWithFacebook()}
          className="btn-dark shadow px-5 mt-3"
        >
          <img height="30px" src={facebook} alt="facebook" />{" "}
          <span className="px-2"> Sign In With Facebook</span>
        </Button>{" "}
        <br />
        <Button
          onClick={() => signInWithGithub()}
          className="btn-dark shadow px-5 mt-3"
        >
          <img height="30px" src={github} alt="github" />{" "}
          <span className="px-2"> Sign In With Github</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
