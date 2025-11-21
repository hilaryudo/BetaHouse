import React,{ useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import google from "../assets/google.webp"
import coverPhoto from '../assets/coverPhoto.png'

const SignIn = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "", password: "", remember: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.email.trim() || !form.password.trim()) {
      setError("Please enter your email and password");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://betahouse-backend-twfz.onrender.com/api/v1/signIn", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
          email: form.email, password: form.password,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        const msg = data?.message || Object.values(data)[0] || "Login failed";
        setError(msg);
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess("Login Successful! Redirecting...");
      setLoading(false);

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {
      setError("Network error. Please try again");
      setLoading(false);
    }
  };

  return (
    <div className='wrapper md:flex items-center gap-[33px]'>
      <div className='md:w-1/2 h-[854px] py-10 md:py-15 lg:w-1/2'>
        <h2 className='font-[Outfit] font-semibold text-[#181A20] text-[26px] md:text-[28px] lg:text-[32px] mb-2'>Welcome Back to BetaHouse!</h2>
        <p className='font-normal font-[Outfit] text-[16px] text-[#181A20]/82 mb-9'>Let's get started by filling out the information below</p>

        {error && (
          <div className='mb-4 text-red-700 bg-red-100 px-4 py-2 rounded-md'>
            {error}
          </div>
        )}

        {success && (
          <div className='mb-4 text-green-700 bg-green-100 px-4 py-2 rounded-md'>
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className='my-5'>
            <label> 
              <span className='block font-[Outfit] font-medium text-[16px] text-[#181A20]/82'>Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='Enter your Email'
              className='w-full md:w-[480px] lg:w-[350px] mt-2 px-4 py-3 border rounded-md focus:outline-none placeholder:text-[16px] placeholder:text-[#263238]/56 placeholder:font-[Outfit] placeholder:font-normal' />
            </label>
          </div>

          <div className='my-5'>
            <label> <span className='block font-[Outfit] font-medium text-[16px] text-[#181A20]/82'>Password</span>
              <input type="password" name="password" value={form.password} onChange={handleChange} placeholder='Enter your password'
              className='w-full md:w-[480px] lg:w-[350px] mt-2 px-4 py-3 border rounded-md focus:outline-none placeholder:text-[16px] placeholder:text-[#263238]/56 placeholder:font-[Outfit] placeholder:font-normal' />
            </label>
          </div>
          
          <div className='flex justify-between mt-3 mb-6'>
            <label className='flex items-center gap-3 font-[Outfit] font-medium text-[16px] text-[#716F6F]'>
             <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} />
             Remember Me
            </label>
            <p className='md:pr-55 lg:pl-35 font-[Outfit] font-normal text-[16px] text-[#EC5E5E]'>Forgot Password?</p>
          </div>

          <button type='submit' className='mt-6 w-full md:w-[480px] lg:w-[350px] bg-[#3D9970] text-[#FFFFFF] py-4 px-2.5 rounded-[15px] font-[Outfit] font-normal disabled:opacity-60'
           disabled={loading}>
            {loading ? "Signing in..." : "Sign up"}
          </button>

          <div className='flex items-center gap-3 my-5 md:pr-65 lg:pl-20'>
            <div className='flex-1 h-0.5 bg-[#4F4E4E]'/>
            <span className='text-[#4F4E4E] text-[16px] font-semibold font-[Exo2]'>or</span>
            <div className='flex-1 h-0.5 bg-[#4F4E4E] '/>
          </div>

          <button type='button' className='w-full md:w-[480px] lg:w-[350px] my-5 border border-[#000000]  px-2.5 py-3 rounded-[15px] flex justify-center items-center gap-3'>
            <img src={google} alt="google icon" className='w-5'/>
            <span className='font-[Outfit] font-normal text-[22px] text-[#292929]'>Continue with Google</span>
          </button>

          <p className='font-[Outfit] font-normal text-[18px] text-[#716767] text-center md:pr-65 lg:pl-15'>
            New User?{" "}
            <Link to="/signup" className='text-[#3D9970]'>Sign Up</Link>
          </p>
          

        </form>
      </div>
      
      <div className='hidden md:block '>
        <img src={coverPhoto} alt="coverPhoto" className='w-full lg:h-[1000px]'/>
      </div>
    </div>
  )
}

export default SignIn