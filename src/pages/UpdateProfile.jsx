import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../providers/";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { updateUserProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
      setUser((prev) => ({ ...prev, displayName: name, photoURL: photo }));
      toast.success("Profile Updated");
      navigate("/profile");
    });
  };
  return <div></div>;
};

export default UpdateProfile;
