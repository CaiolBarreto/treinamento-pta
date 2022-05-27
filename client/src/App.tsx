import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import 'antd/dist/antd.css';

import { Login } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
