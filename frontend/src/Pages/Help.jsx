import React from 'react'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
   <section className="bg-white py-16 text-gray-800 px-6 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold text-center my-10">Help & Support</h2>

  <div className="mb-10 text-center text-gray-600">
    <p>Have a question? We’ve got answers. Browse FAQs or contact our support team.</p>
  </div>

  <div className="space-y-6">
    <details className="border p-4 rounded">
      <summary className="font-semibold cursor-pointer">How do I book an appointment?</summary>
      <p className="mt-2 text-gray-600">Choose your doctor, select date/time, and confirm the appointment. You’ll get a confirmation via email/SMS.</p>
    </details>

    <details className="border p-4 rounded">
      <summary className="font-semibold cursor-pointer">How do I cancel or reschedule?</summary>
      <p className="mt-2 text-gray-600">Go to "My Appointments", click on the appointment, and choose reschedule or cancel.</p>
    </details>

    <details className="border p-4 rounded">
      <summary className="font-semibold cursor-pointer">How can I talk to a doctor?</summary>
      <p className="mt-2 text-gray-600">Once your appointment is confirmed, you’ll receive a video call link or visit instructions.</p>
    </details>
  </div>

  <div className="mt-12 text-center">
    <h3 className="text-xl font-semibold mb-2">Still need help?</h3>
    <p className="text-gray-600">Reach out to our support team below.</p>

    <div className="mt-4 space-y-2 text-gray-700">
      <p>📧 Email: support@patientsystem.com</p>
      <p>📞 Phone: +91 9002100354</p>
    </div>
  </div>
</section>


  )
}

export default Help