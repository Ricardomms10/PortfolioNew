

import './App.css';
import { GlobalStyles } from './GlobalStyled/GlobalStyled';
import { AppRoutes } from './contain/routes';


function App() {
  return (
    <div >
      <GlobalStyles />
      <AppRoutes />
    </div>
  );
}

export default App;
