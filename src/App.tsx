import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyle, { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import Theme from './themes'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
