import React from 'react';

interface SectionProps {
  title: string;
  points: React.ReactNode[]; // This will allow strings and JSX elements like Link
}

const RefundPolicy = () => {
  return (
    <div className="container mx-auto bg-gradient-to-br from-sky-400 via-blue-200 to-blue-300 min-h-screen">
      {/* Page Header */}
      <div className="text-center py-8">
        <h1 className="text-6xl font-serif underline text-white drop-shadow-lg">
          Refund Policy
        </h1>
      </div>

      {/* Sections */}
      <div className="px-6 py-10">
        {/* Section 1 */}
        <Section
          title="1. General Refund Conditions"
          points={[
            "Refunds are applicable only under specific conditions as mentioned in this policy.",
            "Refunds will be processed using the same payment method used for the original transaction.",
          ]}
        />

        {/* Section 2 */}
        <Section
          title="2. Eligibility for Refunds"
          points={[
            <>
              <strong>Technical Issues:</strong> If the service or subscription purchased fails to deliver due to a technical error attributable to our platform. The issue must be reported within 3 business days of the transaction for eligibility.
            </>,
            <>
              <strong>Duplicate Payment:</strong> If you are charged multiple times for the same service or subscription, the additional charges will be refunded.
            </>,
            <>
              <strong>Subscription Cancellations:</strong>
              <ul className="list-disc ml-6">
                <li>
                  <strong>Monthly Subscriptions:</strong> Refund requests made within 24 hours of activation.
                </li>
                <li>
                  <strong>Annual Subscriptions:</strong> Pro-rata refunds may apply if cancellation occurs within the first 7 days of subscription.
                </li>
              </ul>
            </>,
          ]}
        />

        {/* Section 3 */}
        <Section
          title="3. Non-Refundable Cases"
          points={[
            "Changes in market conditions or investment decisions after using our tools/services.",
            "Failure to use the subscription or service within the validity period.",
            "Any services or features labeled as 'non-refundable' at the time of purchase.",
            "Cancellation of a subscription after the eligible refund period.",
          ]}
        />

        {/* Section 4 */}
        <Section
          title="4. Refund Process"
          points={[
            <>
              <strong>Initiating a Refund Request:</strong> To request a refund, contact our support team at <strong>[Triohubs@gmail.com]</strong> with the following details:
              <ul className="list-disc ml-6 mt-2">
                <li>Transaction ID</li>
                <li>Date of Transaction</li>
                <li>Reason for Refund</li>
                <li>Supporting Documentation (if applicable)</li>
              </ul>
            </>,
            <>
              <strong>Processing Time:</strong> Refund requests are processed within 7-10 business days after verification.
            </>,
            <>
              <strong>Refund Method:</strong> Refunds will be credited back to the original payment method used for the transaction.
            </>,
          ]}
        />

        {/* Section 5 */}
        <Section
          title="5. Amendments to This Policy"
          points={[
            "We reserve the right to update or modify this Refund Policy at any time. Any changes will be notified to users via email or a notice on our website.",
          ]}
        />
      </div>
    </div>
  );
};

// Reusable Section Component
const Section :React.FC<SectionProps> = ({ title, points }) => {
  return (
    <div className="mb-8 text-center bg-gray-200 rounded-lg shadow-md p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold font-mono text-gradient bg-gradient-to-r from-blue-500 to-sky-400 text-transparent bg-clip-text my-4">
        {title}
      </h2>
      {/* Points */}
      <ul className="text-gray-800 text-lg text-left list-disc list-inside space-y-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default RefundPolicy;
