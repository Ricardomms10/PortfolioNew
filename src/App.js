import { GlobalStyles } from './styles/GlobalStyled/GlobalStyled';
import { AppRoutes } from './routes/routes';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

register( );

function App() {
  return (
    <div >
      <GlobalStyles />
      <AppRoutes />
    </div>
  );
}

export default App;
