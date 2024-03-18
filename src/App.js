import "./App.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import axios, { formToJSON } from "axios";
import jsonp from "jsonp";
import { useState } from "react";
import NewsletterForm from "./NewsletterForm";

function App() {
  return (
    <div className="App">
      Mailchipm form using MailchimpSubscribe
      {/* <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} /> */}
      <MailchimpSubscribe
        url={process.env.REACT_APP_MAILCHIMP_URL}
        // render={({ subscribe, status, message }) => (
        //   <div>
        //     <NewsletterForm onSubmitted={(formData) => subscribe(formData)} />
        //     {status === "sending" && (
        //       <div style={{ color: "blue" }}>sending...</div>
        //     )}
        //     {status === "error" && (
        //       <div
        //         style={{ color: "red" }}
        //         dangerouslySetInnerHTML={{ __html: message }}
        //       />
        //     )}
        //     {status === "success" && (
        //       <div style={{ color: "green" }}>Subscribed !</div>
        //     )}
        //   </div>
        // )}

        render={(props) => {
          const { subscribe, status, message } = props || {};

          return (
            <NewsletterForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            ></NewsletterForm>
          );
        }}
      />
    </div>
  );
}

export default App;
