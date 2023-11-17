import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function AuthDetails() {
  const [authuser, setAuthUser] = useState("");
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return ()=>{
        listen()
    };
  }, []);
  const userSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out olundu");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div style={{textAlign:"center"}}>
      {authuser ? <><p>{`Signed In as ${authuser.email}`}</p><button onClick={userSignout}>Sign Out</button></> : <p>Cixis olundu</p>}
    </div>
  );
}
