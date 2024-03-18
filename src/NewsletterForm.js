import React, { useState, useEffect } from "react";

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const url = process.env.REACT_APP_MAILCHIMP_URL;

//     jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
//       const { msg, result } = data;
//       // do something with response
//       alert(msg);

//       console.log("This is data: ", data);
//     });
//   };

const NewsletterForm = ({ status, message, onValidated }) => {
  console.log("This is process: ", process.env.REACT_APP_MAILCHIMP_URL);
  const [email, setEmail] = useState("");
  const [error, setError] = useState();

  console.log("this is status:", status);
  console.log("this is message:", message);
  console.log("this is onValidated:", onValidated);

  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    //On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  useEffect(() => {
    if (status === "sending") {
      setEmail("");
    }
  }, [status]);

  return (
    <div>
      <input
        type="email"
        value={email}
        name="EMAIL"
        className="required email"
        id="mce-EMAIL"
        required
        style={{
          width: "300px",
          height: "50px",
          border: "1px",
          borderStyle: "solid",
        }}
        onChange={(event) => setEmail(event?.target?.value)}
      ></input>
      {/* {error}
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div style={{ color: "green" }}>Subscribed !</div>
      )} */}
      {message}
      <button type="text" onClick={handleFormSubmit}>
        Subscribe
      </button>
    </div>
  );
};

export default NewsletterForm;
