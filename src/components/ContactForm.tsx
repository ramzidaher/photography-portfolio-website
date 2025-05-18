import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrbqjwkl");

  if (state.succeeded) {
    return (
      <div className="max-w-xl mx-auto text-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-white shadow-xl mt-10">
        <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
        <p className="text-base">Your message has been sent successfully. I’ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-gray-300 mb-2">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:ring-0 text-black"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:ring-0 text-black"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm text-gray-300 mb-2">Preferred Date</label>
        <input
          id="date"
          type="date"
          name="preferredDate"
          className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:ring-0 text-black"
        />
        <ValidationError prefix="Preferred Date" field="preferredDate" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-gray-300 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:ring-0 text-black"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-3 bg-white text-black border border-white hover:bg-gray-200 transition-colors font-medium rounded-md"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
