import './App.less';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito Sans&display=swap');
  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <div className="App">
                <LandingPage />
            </div>
        </>
    );
}

export default App;
