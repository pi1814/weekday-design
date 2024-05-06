import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../redux/actions';
import JobCard from './JobCard';
import { CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const JobBoard = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jdList);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);


  return (
    <CardDeck>
        {console.log(jobs)}
      {jobs.map(job => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </CardDeck>
  );
};

export default JobBoard;
