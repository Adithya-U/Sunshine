import { Link } from 'react-router-dom';
import logo1 from './l3.png'
export default function Header() {
  return (
    <header className='bg-everglade shadow-md w-full'>
      <div className='flex justify-between items-center max-w-full mx-3  px-5 py-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <img src={logo1} width={180} height={100} alt="logo" />  
            {/*<span className='text-slate-500'>Sunshine</span>
            <span className='text-slate-700'>Builders</span>*/}
          </h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-tuftbush hover:underline'>
              Home
            </li>
          </Link>
        <a href="#about">
          <li className='sm:inline text-tuftbush hover:underline cursor-pointer'>
            About
          </li>
        </a>


        </ul>
      </div>
    </header>
  );
}