import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/axiosUser";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newLoading, setNewLoading] = useState(true);
  const [modalIsEditUserOpen, setIsEditUserOpen] = useState(false);
  const [selectUser, setSelectUser] = useState(null);
  const [modalIsDeleteUserOpen, setIsDeleteUserOpen] = useState(false);
  const [selectDeleteUser, setSelectDeleteUser] = useState(null);

  const navigate = useNavigate();

  const NewLogin = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKENUSER", response.data.token.token);
      const { token, user } = response.data.token;

      setUser(user);

      localStorage.setItem("@TOKEN", token);
      toast.success("Login successfully! 👏");

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.setItem("@USER_ID", user.id);

      getUser();

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      toast.error("User not found! 👀");
    } finally {
      setLoading(false);
    }
  };

  const getUser = async () => {
    const tokenValidate = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USER_ID");

    if (!tokenValidate) {
      setNewLoading(false);
      return;
    }
    api.defaults.headers.common["Authorization"] = `Bearer ${tokenValidate}`;
    try {
      const response = await api.get(`/users/${userId}`);

      setUser(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setNewLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const NewRegister = async (data) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Register successfully! 😎");
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      toast.error("Something went wrong! 😢");
    } finally {
      setLoading(false);
    }
  };

  const handleEditUserModal = () => {
    setIsEditUserOpen(!modalIsEditUserOpen);
  };

  const EditUser = async (data) => {
    try {
      setLoading(true);

      await api.patch(`/users/${data.id}`, data);
      getUser();

      setIsEditUserOpen(false);
      toast.success("Profile changed successfully! 😎");
    } catch (error) {
      toast.error("Something is wrong! 🤨");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUserModal = (user) => {
    setSelectDeleteUser(user);
    setIsDeleteUserOpen(!modalIsDeleteUserOpen);
  };

  const DeleteToken = () => {
    localStorage.removeItem("@TOKENCLIENT");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER_ID");
  };

  const LoginRedirect = () => {
    navigate("/");
  };

  const RemoveUser = async (userId) => {
    try {
      setLoading(true);

      await api.delete(`/users/${userId}`);
      getUser();

      toast.info("Profile removed successfully! 😜");
      DeleteToken();
      LoginRedirect();
    } catch (error) {
      toast.error("Something is wrong! 🤨");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        NewLogin,
        user,
        setUser,
        newLoading,
        setNewLoading,
        NewRegister,
        getUser,
        modalIsEditUserOpen,
        setIsEditUserOpen,
        handleEditUserModal,
        selectUser,
        setSelectUser,
        EditUser,
        modalIsDeleteUserOpen,
        setIsDeleteUserOpen,
        selectDeleteUser,
        setSelectDeleteUser,
        handleDeleteUserModal,
        RemoveUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
