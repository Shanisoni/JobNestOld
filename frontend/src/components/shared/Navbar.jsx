import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2, Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-gray-100 shadow-md sticky top-0 z-50">

      <div className="flex items-center justify-between mx-auto max-w-7xl h-20 px-4 md:px-10">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-900">
          Job<span className="text-[#F83002]">Nest</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links & Auth Buttons */}
        <div className={`md:flex items-center gap-8 absolute md:static top-20 left-0 w-full md:w-auto bg-blue md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${menuOpen ? 'block p-6' : 'hidden md:flex'}`}>
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 font-semibold text-gray-800 text-lg">
            {user && user.role === 'recruiter' ? (
              <>
                <li><Link to="/admin/companies" onClick={() => setMenuOpen(false)}>Companies</Link></li>
                <li><Link to="/admin/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link></li>
                <li><Link to="/browse" onClick={() => setMenuOpen(false)}>Browse</Link></li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="px-6 py-2 text-sm font-semibold border-gray-500 hover:border-[#6A38C2] w-full md:w-auto"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white px-6 py-2 text-sm font-semibold w-full md:w-auto"
                  onClick={() => setMenuOpen(false)}
                >
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <div className="mt-4 md:mt-0">
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer hover:ring-2 ring-[#6A38C2] transition">
                    <AvatarImage src={user?.profile?.profilePhoto} alt="User" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 rounded-xl shadow-xl">
                  <div className="flex items-start gap-4 border-b pb-4">
                    <Avatar>
                      <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-gray-900">{user?.fullname}</h4>
                      <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3 text-gray-700">
                    {user.role === 'student' && (
                      <div className="flex items-center gap-2 hover:text-[#6A38C2] transition">
                        <User2 size={18} />
                        <Button variant="link" className="p-0 h-auto"><Link to="/profile">View Profile</Link></Button>
                      </div>
                    )}
                    <div className="flex items-center gap-2 hover:text-red-600 transition">
                      <LogOut size={18} />
                      <Button onClick={logoutHandler} variant="link" className="p-0 h-auto">Logout</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
