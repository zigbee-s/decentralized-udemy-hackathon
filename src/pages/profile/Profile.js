import React from "react";
import avatar from '../../assets/avatar.png'
import Navigation from './Navigation';
import Card from "../explore/Card";
import background from '../../assets/background.png';

const Profile = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-8 mt-20 pt-5 font-Inter">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-black">
          <img
            src={background}
            alt="Profile Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <div className="flex flex-col items-center pt-20 mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={avatar}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">John Doe</h2>
              <p className="text-gray-200">john.doe@example.com</p>
            </div>
          </div>
        </div>
      </div>
       
       <Navigation/>
       <div className="pt-5">
       <Card/>
       </div>
    </div>
  );
};

export default Profile;
