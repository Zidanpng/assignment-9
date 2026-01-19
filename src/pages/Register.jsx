import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Logged in With Google!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must have at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must have at least one lowercase letter");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          toast.success("Registration Successful!");
          navigate("/");
        });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col mx-auto w-full">
        <h1 className="text-5xl text-blue-900 font-bold">Please Register</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="name"
                  name="name"
                  className="input"
                  placeholder="name"
                />
                <label className="label">Photo</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Photo URL"
                  required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6 top-3.5 text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <button className="btn btn-neutral mt-4 bg-gradient-to-br from-blue-900 to-blue-500 border-none text-white hover:scale-105 transition-transform">
                  Register
                </button>
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
              </fieldset>
            </form>
            <p className="text-center">
              Already have an account? Please{" "}
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
