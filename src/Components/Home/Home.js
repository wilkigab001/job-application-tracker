import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import AuthContext from "../../store/authContext";
import Applications from "../Applications/Applications";

const Home = () => {
  const { token, userId } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  const getApplications = () => {
    console.log("getting applications");
    axios
      .get(`/applications/${userId}`)
      .then((res) => setApplications(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <Wrapper>
      {applications.map((application) => {
        return <Applications key={application.id} application={application} getApplications={getApplications} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Home;
