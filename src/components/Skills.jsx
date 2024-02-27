import React, { useState } from 'react';
import './Skills.css';

const ProgressBar = () => {
  // Progress bar 1
  const [progress1, setProgress1] = useState(0);

  const handleIncrement1 = () => {
    setProgress1((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : prevProgress));
  };

  const handleDecrement1 = () => {
    setProgress1((prevProgress) => (prevProgress > 0 ? prevProgress - 10 : prevProgress));
  };

  const handleReset1 = () => {
    setProgress1(0);
  };

  // Progress bar 2
  const [progress2, setProgress2] = useState(0);

  const handleIncrement2 = () => {
    setProgress2((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : prevProgress));
  };

  const handleDecrement2 = () => {
    setProgress2((prevProgress) => (prevProgress > 0 ? prevProgress - 10 : prevProgress));
  };

  const handleReset2 = () => {
    setProgress2(0);
  };

  // Progress bar 3
  const [progress3, setProgress3] = useState(0);

  const handleIncrement3 = () => {
    setProgress3((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : prevProgress));
  };

  const handleDecrement3 = () => {
    setProgress3((prevProgress) => (prevProgress > 0 ? prevProgress - 10 : prevProgress));
  };

  const handleReset3 = () => {
    setProgress3(0);
  };


  return (
    <div>
      <div className="progress-bar-container">
        <input type='text' placeholder='Skill'className='text-center shadow-md'></input>
        <div className=''>
        <button onClick={handleDecrement1} className='bg-red-200 rounded-md'>-</button>
        <button onClick={handleIncrement1} className='bg-blue-400 rounded-md'>+</button>
        </div>
        <div className="progress-bar" style={{ width: `${progress1}%` }}></div>
        <p className="progress-label">{progress1}%</p>
        <button onClick={handleReset1} className='bg-red-300 rounded-md'>reset</button>
      </div>

      <div className="progress-bar-container">
      <input type='text' placeholder='Skill'className='text-center shadow-md'></input>
        <button onClick={handleDecrement2} className='bg-red-200 rounded-md'>-</button>
        <button onClick={handleIncrement2} className='bg-blue-400 rounded-md'>+</button>
        <div className="progress-bar" style={{ width: `${progress2}%` }}></div>
        <p className="progress-label">{progress2}%</p>
        <button onClick={handleReset2} className='bg-red-300 rounded-md'>reset</button>
      </div>

      <div className="progress-bar-container">
        <div className='flex flex-col items-center'>
            <input type='text' placeholder='Skill' className='text-center shadow-md'></input>
        </div>
        <button onClick={handleDecrement3} className='bg-red-200 rounded-md'>-</button>
        <button onClick={handleIncrement3} className='bg-blue-400 rounded-md'>+</button>
        <div className="progress-bar" style={{ width: `${progress3}%` }}></div>
        <p className="progress-label">{progress3}%</p>
        <button onClick={handleReset3} className='bg-red-300 rounded-md'>reset</button>
      </div>
    </div>
  );
};

export default ProgressBar;