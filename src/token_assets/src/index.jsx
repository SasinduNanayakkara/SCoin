import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from "@dfinity/auth-client";

const init = async () => { 
  
  const Auth = await AuthClient.create();

  if (await Auth.isAuthenticated()) {
    handleAuthentication(Auth);
  }
  else {
    await Auth.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: () => {
      }
    });
  }
}

async function handleAuthentication(Auth) {
  const identity = await Auth.getIdentity();
  const userPricipal = identity._principal.toString();
  ReactDOM.render(<App loggedInPrincipal={userPricipal}/>, document.getElementById("root"));
}

init();


