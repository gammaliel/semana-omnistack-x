import { createStackNavigator } from 'react-navigation-stack';
import { create, createAppContainer } from 'react-navigation';

import Profile from './pages/Profile';
import Main from './pages/Main';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github',
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#7D40E7',
            }
        }
    })
);

export default Routes;