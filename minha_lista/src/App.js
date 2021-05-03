import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './style/global';

const App = props => (
  <>
    {/* adicionei um pacote de rotas para gerenciar as páginas mais facilmente */}
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
