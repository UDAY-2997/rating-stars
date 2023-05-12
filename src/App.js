import './style/index.css'
import React, { useState } from 'react';
import RatingSystem from './components/RatingSystem';
import Dialog from './components/Dialog';

function App() {
const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className='star'>
      <div className='grid'>
      <h1>Rating System</h1>
      <RatingSystem />
      </div>
      <div className='dialog'>
      <Dialog onClose={handleCloseDialog} />
      </div>

    </div>
  );
}

export default App;
