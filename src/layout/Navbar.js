import { useState, useContext } from "react";
import LogoEnglish from "../assets/images/logo.png";
import LogoArabic from "../assets/images/ArabicLogo.png";
import { Context } from "../context/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Navbar = () => {
  const links = require("../assets/json/navbar.json");
  const context = useContext(Context);
  const [menuToggle, setMenuToggle] = useState(false);

  const openMobileMenu = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <div className="bg-dark">
      <section className="container relative mx-auto py-4 z-10">
        <div className="flex items-center justify-between my-4">
          <Link className="z-30" to="/">
            <img src={context.currentLocal === "ar" ? LogoArabic : LogoEnglish} alt="WeDeliver" id="logo" className="w-32" />
          </Link>
          <div className="hidden items-center space-s-10 md:flex">
            {links.mainNav.map((link) => {
              return (
                <Link
                  className="text-white text-decoration-none"
                  to={link.link}
                  key={link.id}
                >
                  <FormattedMessage
                    id={`mainNav.${link.name}`}
                    defaultMessage={link.name}
                  />
                </Link>
              );
            })}
            <button 
              className="text-white"
              onClick={context.switchLanguage}
            >
              {context.currentLocal === "ar" ? 'English': 'العربية'}
            </button>
          </div>
          <button
            id="menu-btnp"
            onClick={openMobileMenu}
            className={`z-30 block md:hidden focus:outline-none hamburger ${
              menuToggle && "open"
            }`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {menuToggle && (
          <div
            id="menu"
            className={`fixed inset-0 z-50 flex-col items-left self-end w-5/6 h-full m-h-screen px-10 py-1 pt-32 pb-4 text-white bg-darkBg opacity-95`}
          >
            {links.mainNav.map((link) => {
              return (
                <div className={`w-full py-3 ${context.currentLocal === "ar" ? 'text-right': 'text-left'}`} key={link.id}>
                  <Link
                    className="block hover:text-mainOrange"
                    to={link.link}
                  >
                    <FormattedMessage
                      id={`mainNav.${link.name}`}
                      defaultMessage={link.name}
                    />
                  </Link>
                </div>
              );
            })}
            <button 
              className={`text-white py-3 ${context.currentLocal === "ar" ? 'text-right': 'text-left'}`}
              onClick={context.switchLanguage}
            > 
              {context.currentLocal === "ar" ? 'English': 'العربية'}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
