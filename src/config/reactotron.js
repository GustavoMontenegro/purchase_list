import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({
  host: 'localhost'
})
  .useReactNative()
  .use(reactotronRedux())
  .connect()
  .clear();

// eslint-disable-next-line no-console
console.tron = Reactotron;

export default reactotron;
