import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQs() {
  return (
    <section className="faq-section container mx-auto py-10" id="FAQs">
      <div
        className="px-6 md:px-12 lg:px-20 bg-[url('/FAQ.png')] bg-no-repeat bg-cover bg-center md:h-[100vh] flex flex-col justify-center py-4"
      >
        <div className="text-center mb-10">
          <h3 className="text-primary text-xl font-semibold my-2 ">Frequently Asked Questions</h3>
          <h4 className="text-2xl lg:text-4xl font-bold mb-6 text-sky-700">
            Everything you need to know about our services
          </h4>
          <p className="mb-6 text-primary">
            Here are some of the most common questions and answers about our services. If you have any
            further inquiries, feel free to contact us!
          </p>
        </div>
        <div className="w-full max-w-5xl mx-auto">
          <Accordion className="mb-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" className="text-primary">
                What is TrioHubs?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-gray-700">
              TrioHubs is a leading platform providing business consulting and trading services to empower companies to optimize their trading strategies.
            </AccordionDetails>
          </Accordion>
          <Accordion className="mb-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" className="text-primary">
                How does TrioHubs help with trading?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-gray-700">
              We provide real-time data, expert analysis, and strategies to maximize your trading success.
            </AccordionDetails>
          </Accordion>
          <Accordion className="mb-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span" className="text-primary">
                How do I get started?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-gray-700">
              Simply sign up on our platform and get access to our trading tools and expert consultation.
            </AccordionDetails>
          </Accordion>
          <Accordion className="mb-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography component="span" className="text-primary">
                Do you offer personalized consultations?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="text-gray-700">
              Yes, we offer personalized business consultations to help you optimize your trading strategies.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
