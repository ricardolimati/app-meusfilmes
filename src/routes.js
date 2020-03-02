import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Filmes from './pages/filmes';

export default createStackNavigator({
  Login,
  Main,
  Filmes
}, {
  navigationOptions:{
    headerStyle:{
      backgroundColor: "#e50914"
    },
    headerTintColor: "#FFF",
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    textAling: "center",
  },
});
