import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FloatingChatButton from "./components/FloatingChatButton";
import Navbar from "./components/Navbar"

// Add a WithNavbar wrapper component (inside App.tsx, above the App function)
const WithNavbar = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    {children}
  </>
);



export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <WithNavbar>
              <HomePage />
            </WithNavbar>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <FloatingChatButton />
      <Toaster />
  </AuthProvider>
    </BrowserRouter>
  );
}