import React from 'react';
import { FAQ } from '../components/FAQ';
export const FAQPage = () => {
  return <div className="w-full">
    {/* Page Header */}
    <div className="bg-gray-800 pt-32 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Find answers to common questions about our graduation photography
          services.
        </p>
      </div>
    </div>

    {/* FAQ Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <FAQ />
      </div>
    </section>
    {/* Still Have Questions */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Can't find the answer you're looking for? Please feel free to
          contact us directly.
        </p>
        <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md font-medium text-lg inline-block transition-colors">
          Contact Us
        </a>
      </div>
    </section>
    {/* Payment Info */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Payment Information
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">
                Booking & Deposits
              </h3>
              <p className="text-gray-600 mb-2">
                To secure your booking date, a 50% deposit is required. The
                remaining balance is due on or before the day of your
                photoshoot.
              </p>
              <p className="text-gray-600">
                For premium packages, we can arrange a 3-part payment plan
                upon request.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Payment Methods</h3>
              <p className="text-gray-600 mb-4">
                We accept the following payment methods:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 border rounded-md text-center">
                  <svg className="w-8 h-8 mx-auto mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H19C20.1046 17 21 16.1046 21 15V9C21 7.89543 20.1046 7 19 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm">Credit Card</span>
                </div>
                <div className="p-4 border rounded-md text-center">
                  <svg className="w-8 h-8 mx-auto mb-2 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 9H9V15H15V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm">PayPal</span>
                </div>
                <div className="p-4 border rounded-md text-center">
                  <svg className="w-8 h-8 mx-auto mb-2 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 15C16 13.3431 14.2091 12 12 12C9.79086 12 8 13.3431 8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm">Bank Transfer</span>
                </div>
                <div className="p-4 border rounded-md text-center">
                  <svg className="w-8 h-8 mx-auto mb-2 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9V7C17 5.89543 16.1046 5 15 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H15C16.1046 19 17 18.1046 17 17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 8L7 12L11 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm">Cash</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Cancellation Policy
              </h3>
              <p className="text-gray-600 mb-2">
                Cancellations made more than 48 hours before the scheduled
                shoot will receive a full refund of the deposit.
              </p>
              <p className="text-gray-600 mb-2">
                Cancellations made within 48 hours of the scheduled shoot will
                forfeit the deposit.
              </p>
              <p className="text-gray-600">
                Rescheduling due to bad weather or unforeseen circumstances is
                free of charge with at least 24 hours notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;
};