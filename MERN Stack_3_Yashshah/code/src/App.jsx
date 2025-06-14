import SignupForm from "./Pages/SignupForm.jsx";
import LoginForm from "./Pages/LoginForm.jsx";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/404Page.jsx";
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
