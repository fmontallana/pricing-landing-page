import { useState } from 'react';
import Card from './Card';

function App() {
  const plan = [
    {
      title: 'Starter',
      price: '$19',
      features: [
        '500 MAUs',
        '3 projects',
        'Unlimited guides',
        'Unlimited flows',
        'Unlimited branded themes',
        'Email support',
      ],
    },
    {
      title: 'Pro',
      price: '$99',
      features: [
        'All starter features, plus:',
        'Unlimited projects',
        'Unlimited fully customizable themes',
        'A dedicated Customer Success Manager',
      ],
    },
    {
      title: 'Enterprise',
      price: "Let's Talk!",
      features: [
        'All Pro features',
        'Unlimited MAUs',
        'Dedicated environment',
        'Enterprise account administration',
        'Premium support and services',
      ],
    },
  ];

  return (
    <div className="App realtive container sm:h-screen w-screen bg-dark text-white mx-auto">
      <div className="sm:w-80 bg-accent text-white flex flex-col items-center justify-center p-4 mx-auto rounded-b-md ">
        <p className="text-sm">Your current plan:</p>
        <p className="text-ld font-bold">Starter Trial • 500MAUs</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-4 md:mt-20">
        <p className="font-bold text-2xl">Choose a plan</p>
        <div className="flex justify-center gap-2">
          <p className="text-sm">Billed monthly</p>
          <label
            for="checked-toggle"
            class="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="checked-toggle"
              class="sr-only peer"
              checked
            />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-accent dark:peer-focus:ring-gray-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-accent"></div>
          </label>
          <p className="text-sm">Billed anually</p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center md:items-stretch justify-center gap-6">
        <Card plan={plan[0]} />
        <Card plan={plan[1]} />
        <Card plan={plan[2]} />
      </div>
    </div>
  );
}

export default App;
