import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, User, Mail, Lock, Phone, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { registerUser } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";
import { images } from "../data/content";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in required fields");
      return;
    }

    setLoading(true);
    try {
      // registerUser now returns { token, user } directly
      const data = await registerUser({ name, email, password, phone: phone || undefined });
      login(data.token);
      toast.success("Account created! Welcome to EduReach.");
      navigate("/");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cream">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-1 text-gray-500 hover:text-maroon transition-colors duration-200 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>

          <h1 className="font-heading text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-500 mb-8">Join EduReach for unlimited access to AI chat & counseling calls</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors duration-200" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors duration-200" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 6 characters"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors duration-200" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91-9876543210"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-colors duration-200" />
              </div>
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-maroon text-white py-3 rounded-lg font-semibold hover:bg-maroon-dark disabled:opacity-50 transition-colors duration-200">
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-maroon font-medium hover:underline">Sign In</Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative">
        <img src={images.moreStudents} alt="Students" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-maroon/60 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <GraduationCap className="w-16 h-16 mx-auto mb-4" />
            <h2 className="font-heading text-4xl font-bold mb-2">Join EduReach</h2>
            <p className="text-white/80">92% placement rate · Top recruiters · 25-acre campus</p>
          </div>
        </div>
      </div>
    </div>
  );
}