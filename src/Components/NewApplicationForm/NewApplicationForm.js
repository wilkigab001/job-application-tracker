import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import AuthContext from '../../store/authContext'
const NewApplicationForm = () => {

  const {token, userId} = useContext(AuthContext)

  const [jobTitle, setJobTitle] = useState('')
  const [applicationDate, setApplicationDate] = useState('')
  const [hiringManager, setHiringManager] = useState('')
  const [interviewStatus, setInterviewStatus] = useState('')
  const [jobPostingLink, setJobPostingLink] = useState('')

  const submitHandler = () => {

  }
  return (
    <Wrapper>
      <Form>
        <JobTitleInput placeholder='Job Title'/>
        <ApplicationDate placeholder='When did you apply?'/>
        <HiringManagerInput placeholder='Hiring Manager' />
        <h3>Heard Back Yet?</h3>
        <Item>
          <RadioButton 
          type='radio'
          name='radio'
          value='true'
          />
          <RadioButtonLabel>Yes</RadioButtonLabel>
        </Item>
        <Item>
        <RadioButton 
          type='radio'
          name='radio'
          value='false'
          />
          <RadioButtonLabel>No</RadioButtonLabel>
        </Item>
        <SubmitButton>Submit </SubmitButton>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Form = styled.form``
const JobTitleInput = styled.input``
const HiringManagerInput = styled.input``
const ApplicationDate = styled.input``
const jobPostingLinkInput = styled.input``
const SubmitButton = styled.button``
const Item = styled.div``
const RadioButton = styled.input``
const RadioButtonLabel = styled.label``
export default NewApplicationForm