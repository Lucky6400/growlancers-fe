import { useState } from 'react';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "How can I apply for a job?",
      answer: "To apply for a job, go to the 'Find a Job' section, filter through the jobs and click on the job you are interested in to apply."
    },
    {
      question: "How do I get in touch with recruiters?",
      answer: "You can view and message recruiters via the 'Messages' section of the platform."
    },
    {
      question: "Can I save job listings?",
      answer: "Yes, you can save job listings by clicking the 'Save' button next to a job listing."
    },
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the 'Account Settings' and click on 'Change Password'."
    },
    // Add more FAQs as needed
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page px-4 py-8 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions (FAQs)</h1>
      <div className="faq-list space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item border-b pb-4">
            <button 
              onClick={() => toggleAnswer(index)} 
              className="w-full text-left text-xl font-medium text-gray-800 focus:outline-none hover:text-blue-600"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
