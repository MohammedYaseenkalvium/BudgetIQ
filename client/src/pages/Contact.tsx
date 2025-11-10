import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 space-y-6">
      <h1 className="text-4xl font-bold text-green-500">Contact Us</h1>
      <p className="max-w-2xl text-lg opacity-80">
        Have any questions or feedback? We'd love to hear from you!
      </p>
      <div className="flex flex-col space-y-3 text-md opacity-80">
        <p>
          📧 <span className="font-semibold">support@budgetiq.com</span>
        </p>
        <p>
          📞 <span className="font-semibold">+91 98765 43210</span>
        </p>
        <p>🌐 We’ll get back to you within 24 hours.</p>
      </div>
    </div>
  );
};

export default Contact;
