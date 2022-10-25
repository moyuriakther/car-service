import React from "react";
import auth from "../../../firebase.init";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  // console.log(user);
  const [sendEmailVerification, verifySending, verifyError] =
    useSendEmailVerification(auth);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (verifyError) {
    return (
      <div>
        <p>Error: {verifyError.message}</p>
      </div>
    );
  }
  if (verifySending) {
    return <p>Sending...</p>;
  }
  if (
    user?.providerData[0]?.providerId === "password" &&
    !user?.emailVerified
  ) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "470px" }}
      >
        <div>
          <h3 className="text-danger">Your Is Not Verified !!!</h3>
          <h4 className="text-success">Please Verify Your Email Address</h4>
          <Button
            onClick={async () => {
              await sendEmailVerification();
              toast("Sent Again Email Verification");
            }}
          >
            Send Verification
          </Button>
        </div>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
