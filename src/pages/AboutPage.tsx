import React, { memo } from 'react';
import { TestimonialCard } from '../components/TestimonialCard';
import { CameraIcon, AwardIcon, HeartIcon, UsersIcon } from 'lucide-react';

export const AboutPage = () => {
  const testimonials = [{
    name: 'Emma S.',
    text: 'The graduation photos exceeded my expectations! The photographer made me feel so comfortable and captured amazing shots at the Brighton Seafront.',
    rating: 5
  }, {
    name: 'James L.',
    text: 'Booking was easy and the whole experience was professional from start to finish. The photos perfectly captured my special day!',
    rating: 5
  }, {
    name: 'Sophia T.',
    text: "I'm so glad I chose this service for my graduation photos. The sunset shots at the pier are absolutely stunning!",
    rating: 5
  }, {
    name: 'Michael P.',
    text: "As someone who doesn't like having their photo taken, I was nervous about my graduation shoot. The photographer put me at ease and the results were fantastic!",
    rating: 5
  }];

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-black pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn more about the photographer behind the lens.
          </p>
        </div>
      </div>


      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1603574670812-d24560880210?q=80&w=1000&auto=format&fit=crop" alt="Photographer portrait" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Passionate About Capturing Graduation Moments
              </h2>
              <p className="text-gray-300 mb-4">
                Hi there! I'm a professional photographer specializing in
                graduation photography in Brighton. With over 5 years of
                experience capturing special moments, I've developed a keen eye
                for creating stunning graduation portraits that you'll cherish
                forever.
              </p>
              <p className="text-gray-300 mb-4">
                As a Sussex University alumnus myself, I understand the
                significance of graduation day and the iconic Brighton locations
                that make for perfect backdrops. From the famous Brighton Pier
                to the picturesque seafront, I know all the best spots to create
                magical graduation memories.
              </p>
              <p className="text-gray-300 mb-6">
                My approach is relaxed and fun, ensuring you feel comfortable in
                front of the camera. I believe the best photos come when you're
                having a great time, so expect plenty of laughs during our
                session!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CameraIcon size={20} className="text-white mr-2" />
                  <span className="text-white">5+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon size={20} className="text-white mr-2" />
                  <span className="text-white">500+ Happy Graduates</span>
                </div>
                <div className="flex items-center">
                  <AwardIcon size={20} className="text-white mr-2" />
                  <span className="text-white">Award-Winning</span>
                </div>
                <div className="flex items-center">
                  <HeartIcon size={20} className="text-white mr-2" />
                  <span className="text-white">Sussex Uni Alumni</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">My Approach</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              What makes my graduation photography services stand out from the
              rest.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-gray-600 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Personalized Experience</h3>
              <p className="text-gray-300">
                Every shoot is tailored to your personality and preferences,
                creating photos that truly reflect you.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-gray-600 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Creative Composition</h3>
              <p className="text-gray-300">
                I focus on creating artistic, unique compositions that go beyond
                standard graduation photos.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-gray-600 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Quick Turnaround</h3>
              <p className="text-gray-300">
                Receive your beautifully edited photos quickly so you can share
                them with family and friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">What Clients Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what recent graduates have
              to say about their experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Graduation Shoot?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create beautiful memories of your graduation day at Brighton
            Seafront.
          </p>
          <a href="/contact" className="bg-white text-black hover:bg-gray-200 py-3 px-8 rounded-md font-medium text-lg inline-block transition-colors">
            Book Your Session Now
          </a>
        </div>
      </section>
    </div>
  );
};
