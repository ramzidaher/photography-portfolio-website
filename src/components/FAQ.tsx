import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface FAQItemProps {
  question: string;
  answer: string;
}
const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="border-b border-gray-200 py-4">
      <button className="flex justify-between items-center w-full text-left font-medium text-lg focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
      </button>
      {isOpen && <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>}
    </div>;
};
export const FAQ = () => {
  const faqs = [{
    question: 'What happens if it rains on the day of my shoot?',
    answer: "Don't worry! If there's bad weather on your scheduled day, we'll reschedule to the next available date that works for you at no extra cost. Alternatively, we can explore indoor locations around Brighton if you prefer not to reschedule."
  }, {
    question: 'How many people can be in a group photo?',
    answer: 'For standard packages, I can accommodate groups of up to 15 people. For larger groups, please let me know in advance so I can bring the appropriate equipment and we may need to discuss a small additional fee.'
  }, {
    question: "What's your turnaround time for delivering photos?",
    answer: "For graduation shoots, you'll receive a digital preview gallery within 7 days. After you've made your selections, final edited photos will be delivered within 14 days. Rush delivery is available for an additional fee."
  }, {
    question: 'Do you provide props for graduation shoots?',
    answer: "Yes! I bring basic graduation props like additional caps and gowns if needed. If you have specific props or items you'd like to include, feel free to bring them along."
  }, {
    question: 'Can I request specific editing styles?',
    answer: "Absolutely! During our pre-shoot consultation, we'll discuss your preferred editing style. I'm flexible and can accommodate various looks from bright and airy to more dramatic and moody edits."
  }, {
    question: 'Do you offer payment plans?',
    answer: 'Yes, I understand graduation can be an expensive time. I require a 50% deposit to secure your booking date, with the remaining balance due on or before the shoot day. For premium packages, I can arrange a 3-part payment plan.'
  }];
  return <div className="max-w-3xl mx-auto">
      <div className="space-y-2">
        {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} />)}
      </div>
    </div>;
};