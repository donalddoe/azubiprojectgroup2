import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/ AccordionDetails';

export const Review = () => {
  return (
    <Container>
         <h3>Review</h3>
         <RenderAccordion summary="register" />
    </Container>
   
  
  );
}



