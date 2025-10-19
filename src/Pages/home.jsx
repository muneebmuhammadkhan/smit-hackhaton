import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

export default function Home() {
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // Watch for login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser(currentUser);
      else navigate("/");
    });
    return () => unsubscribe();
  }, [navigate]);

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-slate-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black/60 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-md">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-violet-400 bg-clip-text text-transparent">
          PitchCraft
        </h2>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition"
          >
            <FaUserCircle className="text-green-400 text-2xl" />
            <span className="font-medium text-slate-200 hidden sm:inline">
              {user?.displayName || "User"}
            </span>
          </button>

          {/* Dropdown */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-black/80 border border-white/10 rounded-lg shadow-xl backdrop-blur-md py-2 z-50">
              <p className="px-4 py-2 text-slate-300 border-b border-white/10 text-sm truncate">
                {user?.email}
              </p>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full text-left px-4 py-2 text-slate-200 hover:bg-white/10 transition"
              >
                <FaSignOutAlt className="text-green-500" />
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Welcome,{" "}
          <span className="bg-gradient-to-r from-green-500 to-violet-400 bg-clip-text text-transparent">
            {user?.displayName?.split(" ")[0] || "User"} 👋
          </span>
        </h1>
        <p className="text-slate-400 max-w-md">
          You’re now logged in. Start crafting your next big startup idea with
          PitchCraft’s AI magic ✨
        </p>

        <button
          onClick={() => navigate("/create-pitch")}
          className="mt-10 px-6 py-3 bg-gradient-to-r from-green-600 to-violet-600 hover:from-green-500 hover:to-violet-400 text-white rounded-lg font-semibold shadow-lg transition-all duration-300"
        >
          + Create New Pitch
        </button>
      </main>
    </div>
  );
}
