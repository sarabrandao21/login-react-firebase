import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Home from "./Home";
import Fire from "./config/Fire";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSucess: () => false,
  },
};

function App() {
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      setSignedIn(!!user);
    });
  }, []);
  return (
    <div className="App">
      {isSignedIn ? (
        <Home />
      ) : (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
}

export default App;
