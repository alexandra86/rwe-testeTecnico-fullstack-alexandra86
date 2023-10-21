import { StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <p className="descriptionFooter">
        {" "}
        &copy; {new Date().getFullYear()} My Person{" "}
      </p>
    </StyledFooter>
  );
};
