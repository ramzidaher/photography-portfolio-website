import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { TimelineItem } from '../components/TimelineItem';

export const ContactPage = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-gray-800 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch to book your graduation photoshoot or ask any questions you may have.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Booking Process</h2>
            <p className="text-white max-w-2xl mx-auto">
              Here's what to expect when you book a graduation photoshoot with us.
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-blue-200"></div>
            {/* Timeline items */}
            <div className="space-y-12">
              <TimelineItem step={1} title="Initial Inquiry" description="Fill out the contact form with your preferred date and package." />
              <TimelineItem step={2} title="Consultation" description="We'll have a brief chat about your vision and requirements for the shoot." right />
              <TimelineItem step={3} title="Booking Confirmation" description="Secure your date with a 50% deposit and receive booking confirmation." />
              <TimelineItem step={4} title="Pre-Shoot Preparation" description="Get tips and advice on what to wear and what to expect on the day." right />
              <TimelineItem step={5} title="Photoshoot Day" description="Meet at the agreed location and enjoy your professional graduation photoshoot." />
              <TimelineItem step={6} title="Delivery of Photos" description="Receive your edited photos within 7 days via an online gallery." right />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// TimelineItem component can be in its own file or below
interface TimelineItemProps {
  step: number;
  title: string;
  description: string;
  right?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  step,
  title,
  description,
  right = false,
}) => {
  return (
    <div className="relative flex items-start">
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold text-sm shadow-md">
        {step}
      </div>
      {/* Content */}
      <div
        className={`
          ml-12 md:ml-0 md:w-[calc(50%-20px)] pt-1
          ${right ? 'md:ml-auto' : 'md:mr-auto'}
        `}
      >
        <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};
