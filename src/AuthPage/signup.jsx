import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { FcGoogle } from "react-icons/fc";

 function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Email signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });
      alert("Signup successful! 🎉");
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already registered. Please login instead.");
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Google signup
  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed up with Google!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-black to-slate-900 px-4">
      <div className="max-w-md w-full p-8 sm:p-10 rounded-2xl shadow-2xl bg-gradient-to-b from-black/60 via-slate-900/60 to-black/50 border border-white/5 backdrop-blur-md">
        {/* Heading */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-white">PitchCraft</h2>
          <p className="text-slate-300 mt-1 text-sm">Create your Account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          {/* Name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="px-4 py-3 rounded-lg bg-white/5 border border-[rgba(255,255,255,0.4)] placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="px-4 py-3 rounded-lg bg-white/5 border border-[rgba(255,255,255,0.4)] placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition w-full"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[rgba(255,255,255,0.4)] placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[rgba(255,255,255,0.4)] placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />

          {/* Buttons */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold shadow-md bg-gradient-to-r from-green-600 to-violet-600 hover:from-green-500 hover:to-violet-500 text-white transition disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          <div className="flex items-center justify-center my-2">
            <div className="border-t border-white/10 w-1/4"></div>
            <span className="text-slate-400 text-sm mx-2">or</span>
            <div className="border-t border-white/10 w-1/4"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignup}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-3 border border-[rgba(255,255,255,0.4)] hover:bg-white/5 py-3 rounded-lg font-semibold text-white transition disabled:opacity-60"
          >
            <FcGoogle className="text-2xl" />
            <span>Continue with Google</span>
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-slate-300 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-400 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Signup;