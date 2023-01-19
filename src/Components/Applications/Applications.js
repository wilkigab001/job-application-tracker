import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import AuthContext from "../../store/authContext";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {GiCancel} from 'react-icons/gi'

const Applications = ({ application, getApplications }) => {
  const [editing, setEditing] = useState(false);
  const { token, userId } = useContext(AuthContext);
  const [jobTitle, setJobTitle] = useState(application.jobTitle);
  const [applicationDate, setApplicationDate] = useState(application.applicationDate);
  const [hiringManager, setHiringManager] = useState(application.hiringManager);
  const [interviewStatus, setInterviewStatus] = useState(application.interviewStatus);
  const [jobPostingLink, setJobPostingLink] = useState(application.jobPostingLink);
  const [month, setMonth] = useState(application.month)
  const [year, setYear] = useState(application.year)


  
  useEffect(()=>{
    getApplications()
  }, [])


  const deleteApplication = (id) => {
    axios
      .delete(`/application/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        getApplications();
        console.log("deleted application");
      })
      .catch((err) => console.log(err));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      jobTitle,
      month,
      year,
      hiringManager,
      interviewStatus,
      jobPostingLink,
      userId,
    };
    axios.put(`/application/${application.id}`, body, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      getApplications()
    })
    .catch((err) => console.log(err));
    setEditing(false)
  };
  return (
    <Wrapper>
      {!editing ? (
        <Wrapper>
          {" "}
          <JobTitle>{application.jobTitle} job</JobTitle>
          <ApplicationDate>
            {application.month} apply month
            {application.year} apply year
          </ApplicationDate>
          <HiringManager>
            {application.hiringManager} hiring manager
          </HiringManager>
          <InterviewStatus>
            {application.interviewStatus} interview status
          </InterviewStatus>
          <JobLink>{application.jobPostingLink} job link</JobLink>
          <AiOutlineDelete onClick={() => deleteApplication(application.id)} />
          <AiOutlineEdit onClick={() => setEditing(true)} />{" "}
        </Wrapper>
      ) : (
        <Form onSubmit={submitHandler}>
          <JobTitleInput
            placeholder={application.jobTitle}
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <ApplicationDateInput
            placeholder={application.applicationDate}
            value={applicationDate}
            onChange={(e) => setApplicationDate(e.target.value)}
          />
          <HiringManagerInput
            placeholder={application.hiringManager}
            value={hiringManager}
            onChange={(e) => setHiringManager(e.target.value)}
          />
          <JobPostingLinkInput
            placeholder={application.jobPostingLink}
            value={jobPostingLink}
            onChange={(e) => setJobPostingLink(e.target.value)}
          />
          <h3>Heard Back Yet?</h3>
          <Item>
            <RadioButton
              type="radio"
              name="radio"
              value={true}
              onChange={(e) => setInterviewStatus(e.target.value)}
            />
            <RadioButtonLabel>Yes</RadioButtonLabel>
          </Item>
          <Item>
            <RadioButton
              type="radio"
              name="radio"
              value={false}
              onChange={(e) => setInterviewStatus(e.target.value)}
            />
            <RadioButtonLabel>No</RadioButtonLabel>
          </Item>
          <SubmitButton> Submit </SubmitButton>
          <GiCancel onClick={()=> setEditing(false)} />
        </Form>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const JobTitle = styled.h1``;
const ApplicationDate = styled.h2``;
const HiringManager = styled.h2``;
const InterviewStatus = styled.h2``;
const JobLink = styled.h2``;
const Form = styled.form``;
const JobTitleInput = styled.input``;
const HiringManagerInput = styled.input``;
const ApplicationDateInput = styled.input``;
const JobPostingLinkInput = styled.input``;
const SubmitButton = styled.button``;
const Item = styled.div``;
const RadioButton = styled.input``;
const RadioButtonLabel = styled.label``;

export default Applications;
