import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Email login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google!");
      navigate("/home");
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
          <p className="text-slate-300 mt-1 text-sm">Login to your Account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[rgba(255,255,255,0.4)] placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[rgba(255,255,255,0.4)] placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:green-pink-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold shadow-md bg-gradient-to-r from-green-600 to-violet-600 hover:from-green-500 hover:to-violet-500 text-white transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          <div className="flex items-center justify-center my-2">
            <div className="border-t border-white/10 w-1/4"></div>
            <span className="text-slate-400 text-sm mx-2">or</span>
            <div className="border-t border-white/10 w-1/4"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-3 border border-[rgba(255,255,255,0.4)] hover:bg-white/5 py-3 rounded-lg font-semibold text-white transition disabled:opacity-60"
            aria-label="Continue with Google"
          >
            <FcGoogle className="text-2xl" />
            <span>Continue with Google</span>
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-slate-300 text-sm">
          Didn’t have an account?{" "}
          <Link
            to="/signup"
            className="text-green-400 hover:underline font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
