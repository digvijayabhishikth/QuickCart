import { useNavigate } from "react-router-dom";
import { userLogin } from "../../api/auth";
import { useLogin } from "../../context/login-context";

const Login = () => {
  const navigate = useNavigate();
  const { email, password, loginDispatch } = useLogin();
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const data = await userLogin(email, password);
    if(Object.keys(data)?.length > 0){
        localStorage.setItem('token',data.access_token);
    }
    loginDispatch({
      type: "TOKEN",
      payload: { token: data },
    });
    if (data.access_token) {
      navigate("/");
    }
  };

  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };
  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };
  return (
    <form
      onSubmit={onFormSubmit}
      className="border rounded-md shadow-xl shadow-gray-400 px-10  py-6 w-[400px]"
    >
      <h2 className="text-3xl flex justify-center">Login</h2>
      <div className="flex flex-col gap-2 mb-2">
        <span>
          {" "}
          Email <span className="text-red-400">*</span>
        </span>
        <input
          onChange={onEmailChange}
          className="p-2 outline-none border-b-2 "
          type="email"
          required
          placeholder="sample@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <span>
          {" "}
          Password <span className="text-red-400">*</span>
        </span>
        <input
          onChange={onPasswordChange}
          className="p-2 outline-none border-b-2"
          type="password"
          required
          placeholder="Enter your password"
        />
      </div>
      <div className="flex flex-col gap-2 mx-3 mt-8">
        <button className="p-3 bg-green-600 text-slate-100 rounded-md text-2xl">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
