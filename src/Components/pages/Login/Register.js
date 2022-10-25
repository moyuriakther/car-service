import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import useToken from "../../../hooks/useToken";

const Register = () => {
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const [updateProfile] = useUpdateProfile(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [user] = useAuthState(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  const handleBlur = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      toast("Send Email Verification");
      toast("updated profile");
      // console.log(name, email, password, confirmPassword);
    }
  };
  return (
    <div className="w-50 m-auto my-5">
      <PageTitle title={"register"} />
      <h1 className="text-center">Register</h1>{" "}
      <Form onSubmit={handleRegisterSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            onBlur={handleBlur}
            name="name"
            type="text"
            placeholder="Your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleBlur}
            name="email"
            type="email"
            placeholder="Your email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handleBlur}
            name="password"
            type="password"
            placeholder="Your Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handleBlur}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="checkbox"
          id="terms"
        />
        <label
          //   className={agree ? "ps-2" : "ps-2 text-danger"}
          className={`ps-2 ${agree ? "" : "text-danger"}`}
          htmlFor="terms"
        >
          Accept Terms and Conditions
        </label>{" "}
        <br />
        <Button
          disabled={!agree}
          className="w-50 my-2"
          variant="primary"
          type="Register"
        >
          Register
        </Button>
        <Form.Group>
          <p>
            Already Have An Account?{" "}
            <Link to="/login" className="text-decoration-none text-primary">
              Please Login
            </Link>
          </p>
        </Form.Group>
      </Form>
      <SocialLogin />
    </div>
  );
};

export default Register;
