import { createContext, Dispatch, SetStateAction, useState } from 'react';
import './App.scss';

type AppContextValue = {
  text: string;
  setText?: Dispatch<SetStateAction<string>>;
};

export const AppContext = createContext<AppContextValue>({
  text: 'Hello World!!'
});

function App() {
  const [ text, setText ] = useState('hello');
  return <AppContext.Provider value={{ text, setText }} />
}

export default App;
