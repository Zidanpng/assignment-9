import React from "react";
import { useLocation } from "react-router";

const ForgetPass = () => {
  const location = useLocation();
  const passedEmail = location.state?.email || "";

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    window.location.href = "https://mail.google.com";
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col w-full">
        <h2 className="text-5xl font-bold text-center text-blue-900 mb-4">
          Reset Your Password
        </h2>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
          <form onSubmit={handleReset} className="card-body p-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold mb-2">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={passedEmail}
                placeholder="Enter your email"
                className="input input-bordered focus:border-blue-500"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-br from-blue-900 to-blue-500 border-none text-white hover:scale-105 transition-transform w-full">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
