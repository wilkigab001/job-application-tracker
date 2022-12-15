import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineLogin, AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { MdOutlineWysiwyg } from "react-icons/md";
import { BsFilePerson } from "react-icons/bs";
import AuthContext from "../../store/authContext";

const Header = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Wrapper>
      <Title>JobTrax</Title>
      {authCtx.token ? (
        <List>
          <li>
            <p onClick={() => authCtx.logout()}>
              <AiOutlineLogout />Logout</p>
          </li>
          <NavLink to="/newapplication">
            {" "}
            <MdOutlineWysiwyg />
            New Application
          </NavLink>
          <NavLink to="/profile">
            <BsFilePerson />
            Profile
          </NavLink>
          <NavLink to="/">
            <AiOutlineHome />
            Home
          </NavLink>
        </List>
      ) : (
        <List>
          <NavLink to="/login">
            {" "}
            <AiOutlineLogout />
            Login
          </NavLink>
        </List>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
