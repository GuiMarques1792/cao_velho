import logo from "../assets/cao_velho_logo.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return ( 
    <nav className="flex items-center justify-between p-1 bg-[#0E1213] shadow-custom" >
      {/* Left section */}
      <div className="absolute left-0 flex gap-5 ml-10 text-white text-xxxs">
        <a href="" className="hover:text-[#fcd555] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110">RESERVAR</a>
        <a href="" className="hover:text-[#fcd555] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110">CONTACTOS</a>
      </div>

      {/* Center */}
      <div className="flex items-center justify-center mx-auto">
        <img src={logo} alt="logo" className="w-10 h-10" />
      </div>

      {/* Right section */}
      <div className="absolute right-0 flex gap-5 text-white mr-12 text-xs">
        <a className="hover:text-[#e055b2] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" href="https://www.instagram.com/caovelhobarbershop/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a className="hover:text-[#25D366] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" href="https://api.whatsapp.com/message/EC3HUZMMWHTJK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a className="hover:text-[#1877F2] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" href="https://www.facebook.com/p/CÃO-VELHO-Barbershop-100063733595807/?locale=pt_PT" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
