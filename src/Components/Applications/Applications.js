import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import AuthContext from '../../store/authContext'
import {AiOutlineDelete} from 'react-icons/ai'

const Applications = ({application, getApplications}) => {
  const {token} = useContext(AuthContext)
  const deleteApplication = (id) => {
    axios.delete(`/application/${id}`, {
      headers: {
        authorization: token,
      }
    })
    .then(() => {
      getApplications()
      console.log('deleted application')
    })
    .catch((err) => console.log(err))
  }
  return (
    <Wrapper>
      <JobTitle>
        {application.jobTitle} job
      </JobTitle>
      <ApplicationDate>
        {application.applicationDate} apply date
      </ApplicationDate>
      <HiringManager>
        {application.hiringManager} hiring manager
      </HiringManager>
      <InterviewStatus>
        {application.interviewStatus} interview status
      </InterviewStatus>
      <JobLink>
        {application.jobPostingLink} job link
      </JobLink>
      <AiOutlineDelete onClick={() => deleteApplication(application.id)}/>
    </Wrapper>
  )
}
const Wrapper = styled.div``
const JobTitle = styled.h1``
const ApplicationDate = styled.h2``
const HiringManager = styled.h2``
const InterviewStatus = styled.h2``
const JobLink = styled.h2``

export default Applications