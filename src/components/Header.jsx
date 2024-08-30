import { FaMoon, FaSun } from "react-icons/fa6";


function Header({value , setValue}) {
   

    return (
        
            <header className=" w-full flex justify-between items-center px-20 h-20 shadow-md"  >
                <div>
                    <ul className='flex space-x-10 text-lg'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Store</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>
                </div>

                <div className="cursor-pointer">
                    {
                        value ? <FaSun size={25} onClick={() => setValue(!value)} /> : <FaMoon size={25} onClick={() => setValue(!value)} />
                    }
                </div>
            </header>
    )
}
export default Header
