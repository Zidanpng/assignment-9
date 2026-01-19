import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* profile header */}
        <div className="h-40 bg-gradient-to-br from-blue-900 to-blue-500 relative">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <img
              src={user.photoURL}
              alt="profile pic"
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
            />
          </div>
        </div>
        {/* user info */}
        <div className="pt-20 pb-10 px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome back, {user.displayName}
          </h2>
          <p className="text-gray-500 mt-2 mb-8 italic">
            "Keep your furry friends cozy this winter."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-lg mx-auto">
            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Full Name
              </label>
              <p className="text-lg font-medium text-gray-700">
                {user.displayName}
              </p>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Email Address
              </label>
              <p className="text-lg font-medium text-gray-700">{user.email}</p>
            </div>
          </div>

          {/* action button */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/update")}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
