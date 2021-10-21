import React, { useState, MouseEvent } from "react";

function App() {
  const [modelIsOpen, setModelIsOpen] = useState<boolean>(false);
  const [principle, setPrinciple] = useState<number>(0);
  const [rateOfInterest, setRateOfInterest] = useState<number>(0);
  const [interest, setInterest] = useState<number>(0.0);
  const [years, setYears] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  const toggleModel = (e: MouseEvent) => {
    console.log("open model");
    setModelIsOpen(!modelIsOpen);
  };

  return (
    <div className="h-screen bg-gradient-to-tl from-green-700 via-green-300 to-green-200">
      {modelIsOpen && (
        <div className="fixed z-10 bg-gray-500 bg-opacity-75 w-full h-full flex justify-center items-center">
          <div className="p-5 bg-gray-100">
            <div>Morty Modal</div>
            <input type="text" defaultValue="principle amount" />
            <input type="text" defaultValue="interest rate" />
            <input type="text" defaultValue="years" />
            <input type="text" defaultValue="monthly installments" />
            <button onClick={toggleModel}>close</button>
          </div>
        </div>
      )}
      <div className="flex flex-col h-full">
        <header>
          <ul>
            <li>
              <h1>Welcome to Morty</h1>
            </li>
          </ul>
        </header>
        <section className="flex justify-center items-center h-full">
          <button
            className="bg-white p-2 rounded shadow hover:shadow-md"
            onClick={toggleModel}
          >
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
