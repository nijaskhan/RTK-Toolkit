import './App.css';
import CakeView from './features/cake/CakeView';
import IcecreamView from './features/icecream/IcecreamView';
import UserView from './features/user/UserView';

const outerContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const App = () => {
  return (
    <>
      <div style={outerContainer}>
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
