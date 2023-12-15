import { useState } from 'react';
import MainContent from './components/MainContent/MainContent';
import NavBar from './components/NavBar/NavBar';
import './index.css';

function App() {
  // State to show nav options.
  const [showNavOptions, setShowNavOptions] = useState(false);

  const handleIconMenuClick = () => {
    return setShowNavOptions(!showNavOptions);
  };

  return (
    <div className={`${showNavOptions ? 'block-overlay' : ''}`}>
      <NavBar
        showNavOptions={showNavOptions}
        handleMenuClick={handleIconMenuClick}
      />
      <MainContent />
    </div>
  );
}

export default App;
