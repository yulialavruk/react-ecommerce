import React, { useEffect, createContext, useState } from "react";
import { createUserProfileDocument, auth } from "../firebase";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          setLoading(false);
        });
      } else {
        setUser(userAuth);
        setLoading(false);
      }
    });

    return () => unsubscribeFromAuth();
  });

  const userContext = { user, loading };

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};
