import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.reason) newErrors.reason = 'Please select a reason for contact';
    if (!formData.message) newErrors.message = 'Message cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic
      console.log('Submitted:', formData);
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.h2
        className="text-3xl font-bold text-orange-500 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h2>
      <p className="text-gray-700 mb-6">
        For inquiries about our luxurious cosmetics, please fill out the form below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="reason">Reason for Contact</label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${errors.reason ? 'border-red-500' : 'border-gray-300'}}
          >
            <option value="">Select a reason</option>
            <option value="productInquiry">Product Inquiry</option>
            <option value="orderIssue">Order Issue</option>
            <option value="generalFeedback">General Feedback</option>
          </select>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${errors.message ? 'border-red-500' : 'border-gray-300'}}
            placeholder="Your Message"
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-orange-500">Business Information</h3>
        <p className="text-gray-700">GlamCS</p>
        <p className="text-gray-700">123 Glam Avenue, Beauty City, BC 12345</p>
        <p className="text-gray-700">Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
        <p className="text-gray-700">Email: contact@glamcs.com</p>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
      </div>
    </section>
  );
};

export default ContactSection;