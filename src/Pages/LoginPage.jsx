import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { login } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    if (currentState === "Sign up" && !isFormSubmitted) {
      setIsFormSubmitted(true);
      return;
    }

    login(currentState === "Sign up" ? "signup" : "login", {
      fullName,
      email,
      password,
      bio,
    });
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      <img src={assets.chat1} alt="logo" className="w-[min(30vw,250px)]" />

      <form
        onSubmit={submitHandler}
        className="border-2 bg-white/8 text-white border-sky-300 p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currentState}
          {isFormSubmitted && (
            <img
              onClick={() => setIsFormSubmitted(false)}
              src={assets.arrow_icon}
              alt="arrow"
              className="w-5 cursor-pointer"
            />
          )}
        </h2>
        {currentState === "Sign up" && !isFormSubmitted && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            className="p-2 border text-black border-sky-300 rounded-md focus:outline-none"
            placeholder="Full Name"
            required
          />
        )}
        {!isFormSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="text-black p-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Email Address"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="Password"
              className="text-black p-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
              required
            />
          </>
        )}
        {currentState === "Sign up" && isFormSubmitted && (
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            rows={4}
            className="text-black p-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write a Short bio..."
            required
          ></textarea>
        )}
        <button
          type="submit"
          className="py-3 bg-gradient-to-r from-sky-300 to-purple-400 rounded-md text-white cursor-pointer"
        >
          {currentState === "Sign up" ? "Create Account" : "Login"}
        </button>

        <div className="flex items-center gap-2  text-sm text-white">
          <input
            type="checkbox"
            id="privacy"
            className="w-4 h-4 text-sky-300 accent-blue-600"
          />
          <label htmlFor="privacy" className="cursor-pointer">
            I agree to the{" "}
            <span className="text-sky-300 underline">Privacy Policy</span>
          </label>
        </div>
        <div className="flex flex-col gap-2">
          {currentState === "Sign up" ? (
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrentState("Login");
                  setIsFormSubmitted(false);
                }}
                className="font-medium text-sky-300 cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Create an account{" "}
              <span
                onClick={() => {
                  setCurrentState("Sign up");
                }}
                className="font-medium text-sky-300 cursor-pointer"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
