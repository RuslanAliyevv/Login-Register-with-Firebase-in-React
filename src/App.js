import './App.css';
import AuthDetails from './components/auth/AuthDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';

function App() {
  return (
   <>
   <Signin />
   <Signup />
   <AuthDetails />
   </>
  );
}

export default App;
