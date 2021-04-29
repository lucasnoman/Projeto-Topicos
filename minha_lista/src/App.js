import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './style/global';

const App = props => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
