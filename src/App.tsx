import { useEffect, useState } from 'react';
import MainContent from './components/MainContent/MainContent';
import NavBar from './components/NavBar/NavBar';
import './index.css';

// Function to obtain the current Dimension of the window.
const getCurrentDimension = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

function App() {
  // State to show nav options.
  const [showNavOptions, setShowNavOptions] = useState(false);

  // Initializing state to hold current width and height.
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  // Event listener for the resize event, this will be used to display or not
  // the 'display options' svg.
  useEffect(() => {
    // Function to update Dimensions.
    const updateDimensions = () => {
      const newDimensions = getCurrentDimension();
      setScreenSize(newDimensions);

      if (newDimensions.width > 991) setShowNavOptions(false);
    };

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [screenSize]);

  console.log(screenSize);
  const handleIconMenuClick = () => {
    return setShowNavOptions(!showNavOptions);
  };

  return (
    <div className={`${showNavOptions ? 'block-overlay' : ''}`}>
      <NavBar
        showNavOptions={showNavOptions}
        handleMenuClick={handleIconMenuClick}
        screenSize={screenSize}
      />
      <MainContent />
    </div>
  );
}

export default App;
