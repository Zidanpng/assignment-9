import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { userLogin, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        toast.success(`Welcome Back,${result.user.displayName || "User"}!`);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Invalid email or password,PLease try again.");
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="hero bg-[#e6eef8] min-h-screen ">
      <div className="hero-content flex-col mx-auto w-full">
        <div className="bg-gradient-to-br from-blue-900 to-blue-500 bg-clip-text text-transparent p-8  text-center">
          <h1 className="text-5xl font-bold">Welcome Back</h1>
          <p className="mt-2">Login to access your pet's winter care</p>
        </div>
        <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-lg">
          <div className="">
            <form onSubmit={handleLogin} className=" p-8">
              <div className="form-control">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <label className="label">
                  <Link
                    to="/forgetPass"
                    state={{ email: email }}
                    className="link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-neutral mt-2 w-full bg-gradient-to-br from-blue-900 to-blue-500 border-none text-white hover:scale-105 transition-transform">
                  Login
                </button>
              </div>
              <div className="divider text-gray-400 text-sm">OR</div>
              <div className="form-control">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="btn btn-outline border-gray-300 hover:bg-gray-50 hover:text-blue-900 gap-3 w-full"
                >
                  <FaGoogle />
                  Continue with Google
                </button>
              </div>
              <p className="text-center mt-2">
                New to the website? Please{" "}
                <Link
                  to="/register"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
