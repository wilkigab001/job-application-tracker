import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import AuthContext from "../../store/authContext";
const NewApplicationForm = () => {

  const { token, userId } = useContext(AuthContext);

  const [jobTitle, setJobTitle] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [hiringManager, setHiringManager] = useState("");
  const [interviewStatus, setInterviewStatus] = useState(false);
  const [jobPostingLink, setJobPostingLink] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post(
      `/adding/${userId}`,
      {
        jobTitle,
        applicationDate,
        hiringManager,
        interviewStatus,
        jobPostingLink,
        userId
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };
  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <JobTitleInput
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <ApplicationDate
          placeholder="When did you apply?"
          value={applicationDate}
          onChange={(e) => setApplicationDate(e.target.value)}
        />
        <HiringManagerInput
          placeholder="Hiring Manager"
          value={hiringManager}
          onChange={(e) => setHiringManager(e.target.value)}
        />
        <JobPostingLinkInput
          placeholder="Application Website"
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
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Form = styled.form``;
const JobTitleInput = styled.input``;
const HiringManagerInput = styled.input``;
const ApplicationDate = styled.input``;
const JobPostingLinkInput = styled.input``;
const SubmitButton = styled.button``;
const Item = styled.div``;
const RadioButton = styled.input``;
const RadioButtonLabel = styled.label``;
export default NewApplicationForm;
