import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const linking = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'Home'
            }
          },

          Feed: {
            screens: {
              Feed: 'Feed'
            }
          },

          Filter: {
            screens: {
              Filter: 'Filter',
            },
          },
        },
      },
    },
  },
};
export default linking;
