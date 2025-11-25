import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import coverPhoto from "../assets/coverPhoto.png"
import google from "../assets/google.webp"

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    if (!form.firstname.trim() || !form.lastname.trim || !form.email.trim() || !form.password) {
      return "please fill all required fields";
    }
    if (form.password.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (form.password !== form.confirmPassword) {
      return "Passwords not matched";
    }
    if (!form.agree) {
      return "plesae agree to the terms";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://betahouse-backend-twfz.onrender.com/api/v1/signUp", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
          firstname: form.firstname, lastname: form.lastname, email: form.email, password: form.password
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        const msg = data?.message || Object.values(data)[0] || "Signup failed";
        setError(msg);
      } else {
        setSuccess("Signup successful! Redirecting...");
        setTimeout(() => navigate("/signin"), 1500);
      }
    } catch (error) {
      setError("Network error. Please try again");
      console.log(error)
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className='lg:pl-20 md:flex items-center gap-[33px]'>
      <div className='md:w-1/2 h-[854px] lg:w-1/2'>
        <div>
          <h2 className='font-[Outfit] font-semibold text-[22px] md:text-[28px] text-[#181A20] leading-[26px]'>Join our community of home seekers and explore the possibilities that await</h2>
          <p className='font-[Outfit] font-normal text-[15px] md:text-[16px] text-[#181A20]/82 mb-7'>Let's get started by filling our information below</p>

          {error && (
            <div className='mb-4 text-red-700 bg-red-100 px-4 py-2 rounded'>{error}</div>
          )}
          {success && (
            <div className='mb-4 text-green-700 bg-green-100 px-4 py-2 rounded'>{success}</div>
          )}

          <form onSubmit={handleSubmit} className=''>
            <div className='flex items-center gap-2.5'>
              <label For="firstname"> <span className='block font-[Outfit] font-medium text-[16px] text-[#181A20] '>First Name</span>
                <input type="text" name="firstname" value={form.firstname} onChange={handleChange} placeholder='First Name'
                  className='mt-2 w-[170px] md:w-[190px] lg:w-[150px]  px-4 py-3 border border-[#DEDFED] rounded-md focus:outline-none placeholder:text-[#263238]/56 placeholder:text-[16px] placeholder:font-[Outfit] placeholder:font-normal' required />
              </label>

              <label For="lastname"> <span className=' block font-[Outfit] font-medium text-[16px] text-[#181A20]'>Last Name</span>
                <input type="text" name="lastname" value={form.lastname} onChange={handleChange} placeholder='Last Name'
                  className='mt-2 w-[170px] md:w-[190px] lg:w-[150px] px-4 py-3 border border-[#DEDFED] rounded-md focus:outline-none placeholder:text-[#263238]/56 placeholder:text-[16px] placeholder:font-[Outfit] placeholder:font-normal' />
              </label>
            </div>

            <div className='my-5'>
              <label For="email">
                <span className='block font-[Outfit] font-medium text-[16px] text-[#181A20]'>Email</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='Enter your Email'
                  className='mt-2 w-full md:w-[480px] lg:w-[350px] px-4 py-3 border border-[#DEDFED] rounded-md focus:outline-none placeholder:text-[#263238]/56 placeholder:text-[16px] placeholder:font-[Outfit] placeholder:font-normal' required />
              </label>
            </div>

            <div className='my-5'>
              <label For="password"> <span className='block font-[Outfit] font-medium text-[16px] text-[#181A20]'>Password</span>
                <input type="password" name="password" value={form.password} onChange={handleChange} placeholder='Enter your Password'
                  className='mt-2 w-full md:w-[480px] lg:w-[350px] px-4 py-3 border border-[#DEDFED] rounded-md focus:outline-none placeholder:text-[#263238]/56 placeholder:text-[16px] placeholder:font-[Outfit] placeholder:font-normal' required />
              </label>
            </div>

            <div className='my-5'>
              <label htmlFor="password"> <span className=' block font-[Outfit] font-medium text-[16px] text-[#181A20]'>Confirm Password</span>
                <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder='Confirm your Password'
                  className='mt-2 w-full md:w-[480px] lg:w-[350px] px-4 py-3 border border-[#DEDFED] rounded-md focus:outline-none placeholder:text-[#263238]/56 placeholder:text-[16px] placeholder:font-[Outfit] placeholder:font-normal' required />
              </label>
            </div>

            <div className='my-5'>
              <label>
                <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className='mt-2' />
                <span className='font-[Outfit] font-medium text-[#716F65]'>  I agree to <span className='text-[#3D9970]'> Terms of Service</span> and <span className='text-[#3D9970]'> Privacy Policies</span></span>
              </label>
            </div>

            <button type='submit' disabled={loading} className=' mt-6 w-full md:w-[480px] lg:w-[350px] bg-[#3D9970] text-[#FFFFFF] py-4 px-2.5 rounded-[15px] font-[Outfit] font-normal disabled:opacity-60'>
              {loading ? "Signing up...." : "Sign up"}
            </button>

            <div className='flex items-center gap-3 my-5 md:pr-65 lg:pl-15'>
              <div className='flex-1 h-0.5 bg-[#4F4E4E]' />
              <span className='text-[#4F4E4E] text-[16px] font-semibold font-[Exo2]'>or</span>
              <div className='flex-1 h-0.5 bg-[#4F4E4E] ' />
            </div>

            <button type='button' className='w-full md:w-[480px] lg:w-[350px] my-5 border border-[#000000]  px-2.5 py-3 rounded-[15px] flex justify-center items-center gap-3'>
              <img src={google} alt="google icon" className='w-5' />
              <span className='font-[Outfit] font-normal text-[22px] text-[#292929]'>Continue with Google</span>
            </button>

            <div className='my-5 text-[18px] font-[Outfit] font-normal text-center md:pr-55 '>
              <p className='text-[#716F6F]'>Already have an account?{" "}
                <Link to="/signin" className='text-[#3D9970] '>Sign In</Link>
              </p>
            </div>


          </form>
        </div>
      </div>

      <div className='hidden md:block'>
        <img src={coverPhoto} alt="coverphoto" className='w-full lg:h-[1000px] rounded-xl' />
      </div>

    </div>
  )
}

export default SignUp