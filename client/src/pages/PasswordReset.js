import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PasswordReset = () => {
  const handleSubmit = (e) =>{
      e.preventDefault();
  }

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const setVal = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const sendLink = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else {
      const res = await fetch("/passwordlink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      // console.log(email);
      

      if (data.status === 201) {
        setEmail("");
        setMessage(true);
      } else {
        toast.error("Invalid User", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div className="auth_page">
      <form>
        <h3 className="text-uppercase text-center mb-4 bg-light">
          Social-Trends
        </h3>
        <h3 className="text-uppercase text-center mb-3 ">Password-Reset</h3>
        <div className="form-group">
          <b>
            <label htmlFor="email">Email</label>
          </b>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={setVal}
            name="email"
            id="email"
            placeholder="Enter Your Email Address"
          />
        </div>
        {message ? (
          <p style={{ color: "green" }}>
            PasswordReset Link Sent Successfully in Your Email
          </p>
        ) : (
          ""
        )}

        <button type="submit" className="btn btn-dark w-100" onClick={sendLink}>
          Send
        </button>
        <p className="my-2">
          Already have an account with known password?{" "}
          <Link to="/" style={{ color: "crimson" }}>
            Login Now
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default PasswordReset;
