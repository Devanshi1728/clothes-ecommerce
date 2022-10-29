import React, { Fragment, useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import { Singup } from "../../SignUp/Signup.component";

const SignIn = () => {

  useEffect(() => {
    async function newFn (){
      const response = await getRedirectResult(auth);

    if(response){
      const userDocRef = await createUserDocFromAuth(response.user);
      console.log(userDocRef);
    }
  }
    newFn();
  },[]);

  const logGoogleUser = async () => {
    const { users } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(users);
    console.log(userDocRef);
  };

  const logGoogleRedirectUser = async () => {
    const { users } = await signInWithGoogleRedirect();
    // const userDocRef = await createUserDocFromAuth(user);
    console.log({ users });
  };

  return (
    <Fragment>
      <h1>SignIn component</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={logGoogleRedirectUser}>
        Sign in with Google Redirect
      </button>
      <Singup />
    </Fragment>
  );
};

export default SignIn;
