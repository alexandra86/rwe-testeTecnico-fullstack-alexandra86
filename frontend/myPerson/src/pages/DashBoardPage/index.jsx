import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { StyledDashboardPage } from "./style";
import { Footer } from "../../components/Footer";
import { HeaderLogged } from "../../components/HeaderLogged";
import logo from "../../assets/logo.png";

export const DashBoardPage = () => {
  const { user, newLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENUSER");
    localStorage.removeItem("@USER_ID");
  };

  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {user && (
        <StyledDashboardPage>
          <header className="headerDashboard">
            <img src={logo} alt="logo de MyPerson" className="logo" />
            <button className="btComeBackLogin" onClick={goLoginClick}>
              Go out
            </button>
          </header>

          <HeaderLogged />

          <main className="mainDash"></main>

          <Footer />
        </StyledDashboardPage>
      )}
    </>
  );
};
