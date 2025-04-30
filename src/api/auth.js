import axios from "axios";

export const userLogin = async (email, password) => {
  const url = "https://api.escuelajs.co/api/v1/auth/login";
  try {
    const { data } = await axios.post(
      url,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (err) {
    console.error("Login error:", err.response?.status, err.response?.data);
    return err.response?.data || { error: "Unknown error" };
  }
};
