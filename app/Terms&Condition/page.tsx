import React from 'react';
import Link from 'next/link';


interface SectionProps {
  title: string;
  points: React.ReactNode[]; // This will allow strings and JSX elements like Link
}


const TermsAndConditions = () => {
  return (
    <div className="container mx-auto bg-gradient-to-br from-sky-400 via-blue-200 to-blue-300 min-h-screen">
      {/* Page Header */}
      <div className="text-center py-8">
        <h1 className="text-6xl font-serif underline text-white drop-shadow-lg">
          Terms & Conditions
        </h1>
      </div>

      {/* Sections */}
      <div className="px-6 py-10">
        {/* Section 1 */}
        <Section
          title="1. Account Registration and Security"
          points={[
            "Users are required to create an account to access certain features.",
            "It is the user's responsibility to maintain the confidentiality of their login credentials.",
            "We reserve the right to suspend or terminate accounts for suspicious activities or violations of these terms.",
          ]}
        />

        {/* Section 2 */}
        <Section
          title="2. Subscription and Payment Policy"
          points={[
            "Some services may require a subscription or one-time payment.",
            "Payment terms, fees, and billing cycles will be clearly communicated during the subscription process.",
            <>
              Refunds will be processed as per our{' '}
              <Link href="/RefundPolicy">
                <h4 className="text-sky-800 hover:text-sky-600 underline">
                  Refund Policy
                </h4>
              </Link>
            </>,
          ]}
        />

        {/* Section 3 */}
        <Section
          title="3. Investment Risk Disclaimer"
          points={[
            "Stock market investments are inherently risky, and users should proceed with caution.",
            "We are not liable for any financial losses incurred due to reliance on our information or tools.",
            "Users are encouraged to perform their due diligence before making investment decisions.",
          ]}
        />

        {/* Section 4 */}
        <Section
          title="4. Data Usage and Licensing Policy"
          points={[
            "Users may access data and reports provided on the website for personal use only.",
            "Commercial use or redistribution of our data without prior written permission is prohibited.",
            "We are not responsible for inaccuracies in market data provided by third-party sources.",
          ]}
        />

        {/* Section 5 */}
        <Section
          title="5. Communication Policy"
          points={[
            "By using our website, you agree to receive emails, notifications, and promotional offers from us.",
            "You can opt-out of marketing communications through your account settings or by contacting us.",
            "Service-related emails and notifications are mandatory for account holders.",
          ]}
        />

        {/* Section 6 */}
        <Section
          title="6. Website Availability and Downtime"
          points={[
            "We strive to maintain 24/7 availability of our services but do not guarantee uninterrupted access.",
            "Planned maintenance or unforeseen technical issues may lead to temporary downtime.",
            "We are not responsible for any damages arising from service interruptions.",
          ]}
        />
      </div>
    </div>
  );
};

// Reusable Section Component
const Section : React.FC<SectionProps> = ({ title, points }) => {
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

export default TermsAndConditions;
