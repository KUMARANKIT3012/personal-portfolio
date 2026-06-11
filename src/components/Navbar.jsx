import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <div className='w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center font-bold text-black text-sm'>
          AK
        </div>
      </NavLink>

      <nav className='flex items-center text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>

        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>

        <a
          href='/Ankit_Kumar_Resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='text-black'
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;