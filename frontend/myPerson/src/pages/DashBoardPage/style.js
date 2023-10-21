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

  .mainDash {
    background-color: #f0f0f0;
    padding: 1.25rem;
    max-width: 87.5rem;
    width: 100%;
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
