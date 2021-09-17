import {Provider} from 'react-redux';
import store from './store';
import RestaurantScreen from './components/RestaurantScreen.js';

const App = () => (
  <Provider store={store}>
    <RestaurantScreen />
  </Provider>
);

export default App;
