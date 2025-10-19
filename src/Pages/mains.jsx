import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-gray-950 flex flex-col items-center justify-center text-gray-100 px-6">
      {/* App Title */}
      <h1 className="text-5xl font-bold text-green-500 mb-4 text-center">
        PitchCraft
      </h1>

      {/* Short description */}
      <p className="text-gray-300 text-center max-w-xl mb-10 text-lg">
        PitchCraft is your AI-powered startup assistant. Generate professional
        pitches, elevator summaries, target audience personas, and landing page
        content for your ideas — instantly.
      </p>

      {/* Buttons for login & signup */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg transition"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-green-400 font-semibold rounded-lg border border-green-500 transition"
        >
          Signup
        </button>
      </div>

      {/* Optional small footer */}
      <p className="text-gray-500 text-sm mt-20">
        © 2025 PitchCraft — All Rights Reserved.
      </p>
    </div>
  );
}
