import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import AuthContext from "../../store/authContext";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const NewApplicationForm = () => {
  const { token, userId } = useContext(AuthContext);

  const [jobTitle, setJobTitle] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [hiringManager, setHiringManager] = useState("");
  const [interviewStatus, setInterviewStatus] = useState(false);
  const [jobPostingLink, setJobPostingLink] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const [showDate, setShowDate] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(startDate);
    // let monthSend = startDate.getMonth() + 1;
    // let yearSend = startDate.getFullYear();
    // console.log(monthSend, yearSend)
    // setMonth(monthSend)
    // setYear(yearSend)
    setMonth(startDate.getMonth() + 1)
    setYear(startDate.getFullYear())
    // setDay(startDate.getDay()
    console.log(month, typeof month, year, typeof year)
    axios.post(
      `/adding/${userId}`,
      {
        jobTitle,
        year,
        month,
        hiringManager,
        interviewStatus,
        jobPostingLink,
        userId,
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
        <ShowDateButton onClick={() => setShowDate(!showDate)} type="button">
          {" "}
          Select Date{" "}
        </ShowDateButton>
        {showDate && (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            value={startDate}
          />
        )}
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
const ShowDateButton = styled.button``;
const JobPostingLinkInput = styled.input``;
const SubmitButton = styled.button``;
const Item = styled.div``;
const RadioButton = styled.input``;
const RadioButtonLabel = styled.label``;
export default NewApplicationForm;
