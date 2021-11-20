import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ThemeContext from './contexts/ThemeContext';
import LandingPage from './pages/LandingPage';
import GlobalStyles from './styles/GlobalStyles';

const AppStyles = styled.div`
  /* visibility: ${({ loaded }) => (loaded ? 'visible' : 'hidden')}; */
`;

function App() {
  const { theme } = useContext(ThemeContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <AppStyles loaded={loaded}>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <LandingPage />
      </ThemeProvider>
    </AppStyles>
  );
}

export default App;
