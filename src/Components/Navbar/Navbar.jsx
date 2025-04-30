import { NavLink, useNavigate } from "react-router-dom";
import Icon from "../../../public/QuickCart_Icon.png";
import { useState } from "react";
import { useLogin } from "../../context/login-context";

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const navigate = useNavigate();

  const {accessToken, loginDispatch} = useLogin();
  console.log(accessToken)

  const onLoginClick = () =>{
    if(accessToken?.access_token){
      loginDispatch({
        type : "LOGOUT",
      })
      setIsDropDownOpen(false)
      navigate('auth/login')
    } else{
      setIsDropDownOpen(false)
      navigate('auth/login')
    }
  }

  return (
    <>
      <header className="w-full bg-cyan-400 text-slate-50">
        <div className="flex p-4 justify-between">
          <NavLink to="/">
            <div className="flex items-center lg:mx-18 gap-4">
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
          <div className="flex flex-col-reverse sm:flex-row">
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
            <nav className=" flex items-center w-[25rem]  justify-evenly text-2xl">
              <NavLink to="/cart">
                <div className=" flex items-center gap-1">
                  <span className="material-icons text-amber-200">shopping_cart</span>
                  <span className="">Cart</span>
                </div>
              </NavLink>

              <div
                className="realtive cursor-pointer flex gap-1 items-center border"
                onClick={() => setIsDropDownOpen(!isDropDownOpen)}
              >
                <span className="material-icons">account_circle</span>
                <span>Account</span>
                {isDropDownOpen && (
                  <div className="absolute bg-green-400 top-18 right-25">
                    <button onClick={onLoginClick}>
                      {
                        accessToken?.access_token ? 'Logout' : 'Login'
                      }
                    </button>
                  </div>
                )}
              </div>
              {/* <NavLink to="/login">
                <div className="realtive" onClick={()=> setIsDropDownOpen(!isDropDownOpen)}>
                  <span className="material-icons ">account_circle</span>
                  <span className="">Login</span>
                </div>
                {
                    isDropDownOpen && <div className="absolute bg-green-400">
                      <button>Login</button>
                    </div>
                }
              </NavLink> */}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
