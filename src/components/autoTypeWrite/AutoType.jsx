import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const autoTypeWrite = () => {
  return (
    <>
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "900",
          marginBottom: "33px",
          fontFamily: "Roboto",
        }}
      >
        Hi,
        <br />
        I'm <span style={{ color: "red" }}>Roshan</span>{" "}<br/>
      </h1>
      <h1
       style={{
          fontSize: "72px",
          fontWeight: "900",
          marginBottom: "33px",
          fontFamily: "Roboto",
        }}
      >
         <span style={{ color: "white", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "Web Developer",
              "Programmer",
              "React.js Developer",
              "MERN Developer",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </>
  );
};

export default autoTypeWrite;
