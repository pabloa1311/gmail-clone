import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";

const router = createBrowserRouter([
  {
    path: "/mail",
    element: (
      <>
        <Mail />
      </>
    ),
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/",
    element: <EmailList />,
  },
]);

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          displayName: userAuth.displayName,
          email: userAuth.email,
          photoUrl: userAuth.photoURL,
      }))
      } else {
        dispatch(logout)
      }
    })
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <main>
            <SideBar />

            <RouterProvider router={router} />
          </main>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </>
  );
}

export default App;
