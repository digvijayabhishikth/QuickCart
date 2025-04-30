import Login from "../../Components/Login/Login"
import Navbar from "../../Components/Navbar/Navbar"

const AuthLogin = ()=> {

    return(
        <>
            <Navbar/>
            <main className="flex justify-center item-center p-4 mt-32">
                <Login/>
            </main>
        </>
    )
}

export default AuthLogin;