import { NavLink } from "react-router-dom";
import Icon from "../../../public/QuickCart_Icon.png";

const Navbar = () => {
  return (
    <>
      <header className="w-full bg-cyan-400 text-slate-50">
        <div className="flex p-4 justify-between">
          <NavLink to="/">
            <div className="flex items-center border lg:mx-18 gap-4">
              <div className="w-15">
                <img
                  src={Icon}
                  alt="page-logo"
                  className=" object-cover rounded-full"
                />
              </div>
              <h1 className="lg:text-5xl md:text-5xl">QuickCart</h1>
            </div>
          </NavLink>
          <div className="border flex flex-col-reverse sm:flex-row">
            {/* Search bar */}
            <div className="flex sm:p-4">
              <div className="flex bg-slate-100 items-center w-[70vw] sm:w-[35rem]">
                <input
                  placeholder="Search 'shoes'"
                  className="text-gray-700 p-2 text-sm md:text-base flex-grow bg-transparent outline-none"
                />
                <span className="material-icons-outlined text-gray-700 lg:!text-xl">
                  search
                </span>
              </div>
            </div>
            <nav className="border flex items-center">
              <NavLink to="/cart">
                <span className="material-icons">shopping_cart</span>
                <span className="">Cart</span>
              </NavLink>

              <NavLink to="/login">
                <span className="material-icons ">account_circle</span>
                <span className="">Login</span>
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
