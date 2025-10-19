import { useLocation, useNavigate } from "react-router-dom";

export default function PitchResult() {
  const location = useLocation();
  const navigate = useNavigate();

  // Safely extract data passed from CreatePitch
  const result = location.state?.result || "No pitch generated.";
  const idea = location.state?.idea || "Unknown idea";
  const industry = location.state?.industry || "Not specified";
  const tone = location.state?.tone || "Professional";
  const targetAudience = location.state?.targetAudience || "General audience";
  const responseLength = result?.length || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-gray-950 text-gray-100 px-6 py-10">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-10 border-b border-gray-800 pb-4">
        <h2 className="text-3xl font-extrabold text-green-500 tracking-wide">
          PitchCraft
        </h2>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/home")}
            className="text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition font-medium"
          >
            🏠 Go Home
          </button>
          <button
            onClick={() => navigate("/create-pitch")}
            className="text-sm bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition font-medium"
          >
            ✨ Generate Another
          </button>
        </div>
      </nav>

      {/* Main Result Card */}
      <div className="max-w-3xl mx-auto bg-neutral-900 border border-gray-800 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-green-400 mb-8">
           Your AI-Generated Startup Pitch
        </h1>

        {/* Pitch Info Section */}
        <div className="bg-neutral-800 p-5 rounded-lg mb-8 border border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-green-300">
            Idea Overview
          </h2>

          <div className="space-y-2 text-gray-300">
            <p>
              <strong className="text-green-400"> Idea:</strong> {idea}
            </p>
            <p>
              <strong className="text-green-400"> Industry:</strong> {industry}
            </p>
            <p>
              <strong className="text-green-400"> Tone:</strong> {tone}
            </p>
          </div>

        </div>

        {/* Generated Pitch */}
        <div className="bg-neutral-950 border border-gray-800 rounded-lg p-6 shadow-inner">
          <h2 className="text-lg font-semibold mb-3 text-green-300">
             Generated Pitch
          </h2>
          <pre className="whitespace-pre-wrap text-gray-200 leading-relaxed font-sans text-base">
            {result}
          </pre>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => navigate("/create-pitch")}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium shadow-md"
          >
            ReGenerate.
          </button>
          <button
            onClick={() => navigate("/home")}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition font-medium shadow-md"
          >
             Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
