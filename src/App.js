import { ThemeProvider } from 'styled-components';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Container } from './Components/styles/Container.styled';
import GlobalStyles from './Components/styles/Global.styled';
import Card from './Components/Card/Card';

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
      <Container>
        <Card
          title={'Novedades'}
          body={
            'Esto es una descripcion de una tarjeta que esta saliendo excelente'
          }
          image={'illustration-flowing-conversation.svg'}
        />
        <Card
          title={'Novedades'}
          body={
            'Esto es una descripcion de una tarjeta que esta saliendo excelente'
          }
          image={'illustration-flowing-conversation.svg'}
        />
        <Card
          title={'Novedades'}
          body={
            'Esto es una descripcion de una tarjeta que esta saliendo excelente'
          }
          image={'illustration-flowing-conversation.svg'}
        />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
