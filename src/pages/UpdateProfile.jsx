import React, { useContext } from "react";
import { useNavigate } from "react-router";

import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("Profile Updated");
        navigate("/profile");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleUpdate}
        className="card bg-white p-8 shadow-xl w-96"
      >
        <h2 className="text-2xl text-blue-400 font-bold mb-4">
          Update Profile
        </h2>
        <input
          type="text"
          name="name"
          defaultValue={user?.displayName}
          className="input input-bordered mb-4"
          placeholder="Name"
        />
        <input
          type="text"
          name="photo"
          defaultValue={user?.photoURL}
          className="input input-bordered mb-4"
          placeholder="Photo"
        />
        <button className="btn bg-blue-600 text-white hover:scale-105 transition-transform border-none">
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
