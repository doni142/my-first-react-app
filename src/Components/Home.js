import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()

  const handleclick = () => {
    navigate("/about")
  }

  return(
    <>
      <p>This is Home page</p>
      <button onClick={handleclick}>Click Me</button>
    </>
  )
}

export default Home;
