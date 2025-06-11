/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { use, useEffect, useState } from "react";

function index() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => 
        //this has to be a string: data.message otherise it won't render properly
        setMessage(data.message || "No message received"));
  }, []);

  return <div>{message}</div>;
}

export default index;
