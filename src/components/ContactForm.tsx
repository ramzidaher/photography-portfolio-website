import React, { useState } from 'react';
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  return <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
          Name
        </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border-gray-200 focus:border-gray-900 border focus:ring-0" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
          Email
        </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border-gray-200 focus:border-gray-900 border focus:ring-0" required />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm text-gray-600 mb-2">
          Preferred Date
        </label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 border-gray-200 focus:border-gray-900 border focus:ring-0" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
          Message
        </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 border-gray-200 focus:border-gray-900 border focus:ring-0" required></textarea>
      </div>
      <button type="submit" className="w-full py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
        Send Message
      </button>
    </form>;
};