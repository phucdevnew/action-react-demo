import { useState } from 'react';

export default function MainContent() {
  const [showHelp, setShowHelp] = useState(false);

  const handleButtonClick = () => {
    setShowHelp(true);
  };

  return (
    <div>
      <button type="button" onClick={handleButtonClick}>
        Click me
      </button>
      {showHelp && (
        <div data-testid="help-area">
          <h2>Help Information</h2>
          <p>This is the help area that appears after clicking the button.</p>
        </div>
      )}
    </div>
  );
}
