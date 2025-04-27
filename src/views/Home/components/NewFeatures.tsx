import React from 'react';

const NewFeatures: React.FC = () => {
  const features = [
    {
      icon: '🌐',
      title: 'Online Website With AI Agent',
      description: 'Intelligent digital presence',
    },
    {
      icon: '📊',
      title: 'Build Digital Business',
      description: 'Scale your operations',
    },
    {
      icon: '💬',
      title: 'Patient Conversation',
      description: 'Seamless communication',
    },
    {
      icon: '💰',
      title: 'Boost Revenue',
      description: 'Increase your earnings',
    },
    {
      icon: '👥',
      title: 'Lead Generation Support',
      description: 'Convert visitors to clients',
    },
    {
      icon: '⏰',
      title: '24/7 Support for Patient',
      description: 'Round-the-clock assistance',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-150  transform hover:-translate-y-2"
          >
            <div className="text-4xl mb-4 text-purple-500">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="inline-block bg-blue-500 text-white rounded-full p-4 mb-6">
          <span className="text-3xl">🤖</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Get Your Patient Ready Website Now
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Use power AI to transform your online presence and automate patient interactions
        </p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Join the Waiting List
        </button>
      </div>
    </div>
  );
};

export default NewFeatures;