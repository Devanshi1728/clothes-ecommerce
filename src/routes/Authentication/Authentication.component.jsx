import React, { useEffect } from "react";
import {
  auth,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import { Singup } from './../../components/SignUp/Signup.component';
import SignIn from './../../components/SignIn/SignIn.component';
import "./Authentication.styles.scss";

const Authentication = () => {

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

  return (
    <div className="authentication-container">
      <SignIn />
      <Singup />
    </div>
  );
};

export default Authentication;
