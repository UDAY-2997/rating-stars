import React, { useState } from 'react';

function Dialog() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen && (
        <button className='dialog' onClick={handleToggleDialog}>Open Dialog</button>
      )}
      {isOpen && (
        <div className='dialog-box'>
        <div className='dialog-data'>
          {
            <div className='dialog-main'>
              <span className='dialog-logo'></span>
            </div>
          }
          <button className='dialog' onClick={handleToggleDialog}>Close Dialog</button>
        </div>
        </div>
      )}
    </div>
  );
}

export default Dialog;
