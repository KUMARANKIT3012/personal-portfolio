import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <div className='w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center font-bold text-black text-sm'>
          AK
        </div>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;