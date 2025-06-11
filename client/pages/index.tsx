/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { use, useEffect, useState } from "react";

function index() {
  const [message, setMessage] = useState("Loading...");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:8080/api/home")
      // transforming the response to json
      .then((response) => response.json())
      .then((data) => {

        //this has to be a string: data.message otherise it won't render properly
        setMessage(data.message || "No message received")
        setPeople(data.people || [])
        console.log(data.people)
      });
       
  }, []);




  return (
<>

      <h2>People List</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </>
  )
}
export default index;
