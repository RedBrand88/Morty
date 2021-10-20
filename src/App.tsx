import React, { useState } from "react";

function App() {
  const [modelIsOpen, setModelIsOpen] = useState<boolean>(false);
  const toggleModel = () => {
    console.log("open model");
    setModelIsOpen(!modelIsOpen);
  };

  return (
    <div className="h-screen bg-gradient-to-tl from-green-700 via-green-300 to-green-200">
      {modelIsOpen && <div>Morty Model</div>}
      <div className="flex flex-col h-full">
        <header>
          <ul>
            <li>
              <h1>Welcome to Morty</h1>
            </li>
          </ul>
        </header>
        <section className="flex justify-center items-center h-full">
          <button className="bg-white p-2 rounded" onClick={toggleModel}>
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
