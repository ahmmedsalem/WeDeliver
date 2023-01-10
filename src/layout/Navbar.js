import { useState, useContext } from "react";
import Logo from "../assets/images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Context } from "../components/Wrapper/Wrapper";
// import { FormattedMessage } from "react-intl";

const Navbar = () => {
  const context = useContext(Context);
  const [menuToggle, setMenuToggle] = useState(false);

  const openMobileMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <nav className="container relative mx-auto px-8 lg:px-16 py-6">
      <div className="flex items-center justify-between my-6">
        <div className="z-30">
          <img src={Logo} alt="WeDeliver" id="logo" className="w-32" />
        </div>

        <div className="hidden items-center space-x-10 font-semibold text-grayishBlue md:flex">
          <a
            href="#features"
            className="hover:text-white transition ease-in duration-200"
          >
            Home
          </a>
          <a
            href="#download"
            className="hover:text-white transition ease-in duration-200"
          >
            Captains
          </a>
          <a
            href="#faq"
            className="hover:text-white transition ease-in duration-200"
          >
            Enterprise
          </a>

          <a
            href="#imp"
            className="hover:text-white transition ease-in duration-200"
          >
            Impact
          </a>
          <select
            value={context.locale}
            onChange={context.selectLanguage}
            className="form-select navbar__language w-auto text-start bg-transparent border-0 text-white font-bold"
          >
            <option className="text-black" value={"en"}>
              ENGLISH
            </option>
            <option className="text-black" value={"ar"}>
              العربية
            </option>
          </select>
        </div>
        <button
          id="menu-btnp"
          className="z-30 block md:hidden focus:outline-none hamburger"
          onClick={openMobileMenu}
        >
          {menuToggle ? (
            <FiX size="24px" color="#ccc" />
          ) : (
            <FiMenu size="24px" color="#ccc" />
          )}
        </button>
      </div>
      {menuToggle && (
        <div
          id="menu"
          className="fixed inset-0 z-20 flex-col items-left self-end w-3/4 h-full m-h-screen px-6 py-1 pt-24 pb-4 text-white bg-darkBg"
        >
          <div className="w-full py-3 text-left">
            <a href="#features" className="block hover:text-mainOrange">
              Home
            </a>
          </div>
          <div className="w-full py-3 text-left">
            <a href="#download" className="block hover:text-mainOrange">
              Captains
            </a>
          </div>
          <div className="w-full py-3 text-left">
            <a href="#faq" className="block hover:text-mainOrange">
              Enterprise
            </a>
          </div>
          <div className="w-full py-3 text-left">
            <a href="#salem" className="block hover:text-mainOrange">
              Impact
            </a>
          </div>
          <div className="w-full py-3 text-left">
            <a href="#salem" className="block hover:text-mainOrange">
              بالعربي
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
