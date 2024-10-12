import bg_image from "../assets/background_hero.png";
import logo_name from "../assets/logo_name.png";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url(${bg_image})` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative flex flex-col items-center justify-center space-y-24">
    
        {/* Top links */} 
        <div className=" flex gap-60 text-white text-6xl mt-24">
            <a href="" className="hover:text-[#fcd555] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" > CONTACTOS </a>
            <div className="h-12 border-2 border-white items-center " /> 
            <a href="" className="hover:text-[#fcd555] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" > PREÇARIO </a>
        </div>

        {/* Image Logo name */}
        <img src={logo_name} alt="Logo name" className="w-[1000px] h-[400px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" />

        {/* Social icons */}
        <div className="flex gap-24  text-white">
          <a className="hover:text-[#e055b2] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" href="https://www.instagram.com/caovelhobarbershop/" target="_blank"  rel="noopener noreferrer" >
            <FaInstagram className="w-20 h-20" />
          </a>
          <a className="hover:text-[#1877F2] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" href="https://www.facebook.com/p/CÃO-VELHO-Barbershop-100063733595807/?locale=pt_PT" target="_blank" rel="noopener noreferrer" >
            <FaFacebook className="w-20 h-20" />
          </a>
          <a className="hover:text-[#25D366] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" href="https://api.whatsapp.com/message/EC3HUZMMWHTJK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-20 h-20" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Hero;
