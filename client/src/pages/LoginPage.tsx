import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Mail, Lock, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { loginUser } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";
import { images } from "../data/content";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      // loginUser now returns { token, user } directly
      const data = await loginUser({ email, password });
      login(data.token);
      toast.success("Welcome back!");
      navigate("/");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block lg:w-1/2 relative">
        <img src={images.students} alt="Students" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-maroon/60 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <GraduationCap className="w-16 h-16 mx-auto mb-4" />
            <h2 className="font-heading text-4xl font-bold mb-2">EduReach</h2>
            <p className="text-white/80">Your Gateway to Smarter Education</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cream">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-1 text-gray-500 hover:text-maroon transition-colors duration-200 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>

          <h1 className="font-heading text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-500 mb-8">Sign in to your EduReach account</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors duration-200" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors duration-200" />
              </div>
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-maroon text-white py-3 rounded-lg font-semibold hover:bg-maroon-dark disabled:opacity-50 transition-colors duration-200">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-maroon font-medium hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}