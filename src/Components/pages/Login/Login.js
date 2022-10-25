import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
  useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(user);
  // console.log(user);
  const handleBlur = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    await signInWithEmailAndPassword(email, password);

    // const { data } = await axios.post("http://localhost:8080/login", {
    //   email,
    // });
    // localStorage.setItem("accessToken", data.accessToken);
    // console.log(data);
  };
  if (token) {
    navigate(from, { replace: true });
  }
  if (sending) {
    return <p>Sending...</p>;
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Send");
    } else {
      toast("Provide an email address");
    }
  };
  return (
    <div className="w-50 m-auto my-5">
      <PageTitle title={"login"} />
      <h1 className="text-center">Login</h1>{" "}
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            onBlur={handleBlur}
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="Your Password"
            required
          />
        </Form.Group>
        <Form.Group>
          <p>
            New User?{" "}
            <Link to="/register" className="text-decoration-none text-primary">
              Please Register
            </Link>
            <p>
              Forgot Password?
              <Button onClick={resetPassword} variant="link">
                Reset Password
              </Button>
            </p>
          </p>
        </Form.Group>
        <Button variant="primary" type="Login">
          Login
        </Button>
      </Form>
      <SocialLogin />
    </div>
  );
};

export default Login;
