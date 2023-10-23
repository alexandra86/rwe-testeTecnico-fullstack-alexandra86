import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { StyledDashboardPage } from "./style";
import { Footer } from "../../components/Footer";
import { HeaderLogged } from "../../components/HeaderLogged";
import logo from "../../assets/logo.png";
import perfilImagem from "../../assets/perfilImage.png";
import { EditUserModal } from "../../components/EditUserModal";
import { DeleteUserModal } from "../../components/DeleteUserModal";

export const DashBoardPage = () => {
  const {
    user,
    newLoading,
    setSelectUser,
    modalIsEditUserOpen,
    handleEditUserModal,
    handleDeleteUserModal,
    modalIsDeleteUserOpen,
  } = useContext(AuthContext);

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

          <div className="areaBtProfile">
            <button
              type="button"
              className="btEditProfile"
              onClick={() => {
                handleEditUserModal();
                setSelectUser(user);
              }}
            >
              Edit Profile
            </button>

            <button
              className="btDeleteProfile"
              type="button"
              onClick={() => handleDeleteUserModal()}
            >
              Delete Profile
            </button>
          </div>

          <main className="mainDash">
            <section className="areaUserDash">
              {!user.image ? (
                <img
                  src={perfilImagem}
                  alt="Profile image"
                  className="userImageProfile"
                />
              ) : (
                <img
                  src={user.image}
                  alt="Logged in user image"
                  className="userImageProfile"
                />
              )}
              <div className="areaUserInformation">
                <h1 className="myPersonTittle">My Person</h1>
                <h2 className="userName">Nome: {user.name}</h2>
                <h3 className="userOtherInforms">Email: {user.email}</h3>
                <h3 className="userOtherInforms">Phone: {user.phone}</h3>
                <h3 className="userOtherInforms">
                  Birthday:{" "}
                  {new Date(user.birthday).toLocaleDateString("pt-BR", {
                    timeZone: "UTC",
                  })}
                </h3>
                {user.bio ? (
                  <p className="userOtherInforms">Bio: {user.bio}</p>
                ) : (
                  <p className="userOtherInforms">Bio: uninformed</p>
                )}
                {user.linkedin ? (
                  <h3 className="userOtherInforms">
                    Linkedin:{" "}
                    <a href={user.linkedin} target="blank">
                      {user.linkedin}
                    </a>
                  </h3>
                ) : (
                  <h3 className="userOtherInforms">Linkedin: uninformed</h3>
                )}
                {user.portfolio ? (
                  <h3 className="userOtherInforms">
                    Portfolio:{" "}
                    <a href={user.portfolio} target="blank">
                      {user.portfolio}
                    </a>
                  </h3>
                ) : (
                  <h3 className="userOtherInforms">Portfolio: uninformed</h3>
                )}
                {user.facebook ? (
                  <h3 className="userOtherInforms">
                    Facebook:{" "}
                    <a href={user.facebook} target="blank">
                      {user.facebook}
                    </a>
                  </h3>
                ) : (
                  <h3 className="userOtherInforms">Facebook: uninformed</h3>
                )}
              </div>
            </section>
          </main>

          <Footer />
          {modalIsEditUserOpen && <EditUserModal />}
          {modalIsDeleteUserOpen && <DeleteUserModal />}
        </StyledDashboardPage>
      )}
    </>
  );
};
