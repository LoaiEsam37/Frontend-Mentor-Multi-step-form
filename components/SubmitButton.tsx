import React from "react";

function SubmitButton(Props) {
  return (
    <>
      <style jsx>{`
        button[type="submit"] {
          width: 110px;
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          left: 100%;
          transform: translateX(-100%);
          padding: 10px;
          border: none;
          color: #fff;
          background-color: #03295a;
          border-radius: 5px;
          margin-top: ${Props.marginTop ? Props.marginTop : "100px"};
        }

        button[type="submit"]:hover {
          cursor: pointer;
        }
      `}</style>
      <button type="submit">Next Step</button>
    </>
  );
}

export default SubmitButton;
