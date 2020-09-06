import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ListIemText from '@material-ui/core/ListItemText';

export const Review = ({formData}) => {
  const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      address,
      city,
      phoneNumber,
  } = formData;
  return (
    <Container maxWidth='xs'>
         <h3>Review</h3>
         <RenderAccordion summary="signin" details ={[
           { 'email': firstName },
           { 'password':  },
       
           ]} />
    </Container>
   
  
  );
}

export const RenderAccordion = ({ summary, details }) => (
  <Accordion>
    <AccordionSummary>{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        { details.map(( data,index) => {
          const objKey = Object.keys(data)[1]
          const objValue = data[Object.keys(data)[1]];

        return <ListIemText>{`${objKey}: ${objValue}`}</ListIemText>


        }) }
      </div>
    </AccordionDetail>
  </Accordion>
)

export default Review;
