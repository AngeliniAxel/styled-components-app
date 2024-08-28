import { ThemeProvider } from 'styled-components';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Container } from './Components/styles/Container.styled';
import GlobalStyles from './Components/styles/Global.styled';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container></Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
