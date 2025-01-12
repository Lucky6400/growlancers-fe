
import { Button } from '../ui/button';
import { faqData } from './data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQPage = () => {

  return (
    <div className="faq-page px-4 py-8 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions (FAQs)</h1>
      <Accordion type="single" collapsible>
        {faqData.map((item, idx) => (
          <AccordionItem key={idx + item.answer} value={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="text-xl mt-10 font-semibold text-center mb-6">Have a question?</h3>
      <small className="text-sm font-gray-600">Our team will try to answer your question within 24 hours/</small>

      <textarea name="" id="" rows={5} className="w-full border rounded-xl my-3 border-gray-600 p-2" placeholder="Your question here..."></textarea>

      <Button>Submit</Button>
    </div>
  );
};

export default FAQPage;
