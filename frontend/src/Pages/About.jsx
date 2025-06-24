import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
     <section className="py-16 bg-white text-gray-800">
  <div className="max-w-5xl mx-auto text-center px-6 mt-10">
    <h2 className="text-3xl font-bold mb-4">About MediCare</h2>
    <p className="text-lg text-gray-600 mb-6">
      We are a modern healthcare platform helping patients easily connect with doctors across India. Whether you're looking for an online consultation or in-clinic appointment, MediCare makes it seamless, secure, and stress-free.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6 mt-10 px-6 max-w-6xl mx-auto">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="font-semibold text-xl mb-2">Trusted Doctors</h3>
      <p className="text-gray-600">All professionals are verified, experienced, and available at your convenience.</p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="font-semibold text-xl mb-2">Secure & Private</h3>
      <p className="text-gray-600">Your medical records and chats are fully confidential and encrypted.</p>
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="font-semibold text-xl mb-2">24/7 Booking</h3>
      <p className="text-gray-600">Book an appointment anytime with just a few clicks.</p>
    </div>
  </div>

  <div className="mt-12 text-center">
    <Link to="/Bappointment" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
      Book Appointment
    </Link>
  </div>
</section>
  )
}

export default About