import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";

const router = createBrowserRouter([
  {
    path: "/mail",
    element: (
      <>
        <Mail/>
      </>
    ),
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/",
    element: <EmailList/>,
  },
]);

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <SideBar />

        <RouterProvider router={router} />
      </main>
      <SendMail />
    </div>
  );
}

export default App;
