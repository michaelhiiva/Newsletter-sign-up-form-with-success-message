import { useRef } from 'react';
import './App.css';
import AppInitial from './AppInitial.js';
import AppSuccess from './AppSuccess.js';

function App() {
  const emailAddressInput = useRef(null);
  const emailAddressOutput = useRef(null);
  const subscriptionPage = useRef(null);
  const successPage = useRef(null);

  return (
    <>
      <AppInitial
        emailAddressInput={emailAddressInput}
        emailAddressOutput={emailAddressOutput}
        subscriptionPage={subscriptionPage}
        successPage={successPage}
      />

      <AppSuccess
        emailAddressOutput={emailAddressOutput}
        subscriptionPage={subscriptionPage}
        successPage={successPage}
      />
    </>
  );
}

export default App;
