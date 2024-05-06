import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
     <CardMedia
        sx={{ height: 140 }}
        image={job.logoUrl}
        title={job.jdUid}
      />
      <CardContent>
        <Typography variant="h5">{job.jobRole}</Typography>
        <Typography variant="subtitle1">{job.companyName}</Typography>
        <Typography variant="body2">{job.location}</Typography>
        <Typography variant="body2">{job.jobDetailsFromCompany}</Typography>
        <Typography variant="body2">Experience: {job.experience}</Typography>
        <Button variant="contained" color="primary">Apply</Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;