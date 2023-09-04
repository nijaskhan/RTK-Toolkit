import './App.css';
import CakeView from './features/cake/CakeView';
import IcecreamView from './features/icecream/IcecreamView';
import UserView from './features/user/UserView';

const outerContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const innerContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

function App() {
  return (
    <>
      <div style={outerContainer}>
        <h1>React RTK Query Test</h1>
      </div>
      <div style={innerContainer}>
        <div>
          <CakeView />
          <IcecreamView />
          <UserView />
        </div>
      </div>
    </>
  );
}

export default App;
