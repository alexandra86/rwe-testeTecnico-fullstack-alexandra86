import styled from "styled-components";

export const StyledDashboardPage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .headerDashboard {
    margin-top: 1.8125rem;
    margin-bottom: 1.773125rem;
    max-width: 87.5rem;
    width: 100%;
    padding: 0 2.625rem;
    height: 6.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #051d40;
    border-radius: 0.25rem;
  }

  .btComeBackLogin {
    max-width: 4.218125rem;
    width: 100%;
    height: 2.506875rem;
    border-radius: 0.25rem;
    border: 0.07625rem solid #212529;
    background-color: #e3d43d;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    color: #000000;
  }

  .logo {
    height: 9.375rem;
    width: 9.375rem;
    border-radius: 50%;
  }

  .btComeBackLogin:hover {
    border: 0.07625rem solid #000000;
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
  }

  .areaBtProfile {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .mainDash {
    padding: 1.25rem;
    max-width: 87.5rem;
    width: 100%;
    margin-bottom: 1.25rem;
    border-radius: 0.25rem;
    background-color: #ffffa6;
  }

  .areaUserDash {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .userImageProfile {
    width: 15.625rem;
    height: 15.625rem;
    border: 0.125rem solid #a6ae00;
    border-radius: 0.25rem;
  }

  .areaUserInformation {
    line-height: 1.875rem;
  }

  .myPersonTittle {
    margin-bottom: 0.625rem;
    font-family: "Assistant", sans-serif;
    font-weight: 800;
    font-size: 1.225rem;
    color: #051d40;
    text-align: center;
  }

  .userName {
    font-family: "Assistant", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #000000;
  }

  .userOtherInforms {
    font-family: "Assistant", sans-serif;
    font-weight: 700;
    font-size: 1.025rem;
    color: #000000;
  }

  .btEditProfile {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    background: #a6ae00;
    font-family: "Roboto", sans-serif;
    color: #000000;
    font-size: 0.875rem;
  }

  .btEditProfile:hover {
    background: #301efe;
    color: #ffffff;
    font-weight: bold;
  }

  .btDeleteProfile {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    background: #f87450;
    font-family: "Roboto", sans-serif;
    color: #000000;
    font-size: 0.875rem;
  }

  .btDeleteProfile:hover {
    background: #efab52;
    color: #000000;
    font-weight: bold;
  }

  @media (max-width: 43.75rem) {
    .headerDashboard {
      margin-top: 1.8125rem;
      margin-bottom: 1.773125rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.625rem 0.938rem;
    }
    .logo {
      height: 7.375rem;
      width: 4.375rem;
      border-radius: 50%;
      object-fit: cover;
    }

    .btComeBackLogin {
      max-width: 3.21812rem;
      width: 100%;
      font-size: 0.75rem;
    }

    .areaUserDash {
      flex-direction: column;
      gap: 0.938rem;
    }
  }

  @keyframes cards {
    from {
      opacity: 0;
      transform: translateX(-70%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;
