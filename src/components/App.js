// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";
import AppRouter from "./Router";

function App() {
  const [init, setInit] = useState(false);

  const InitializeUser = () => {
    setInit(true);
  };
  useEffect(() => {
    InitializeUser();
  }, []);
  return <>{init ? <AppRouter /> : "initialinzing"}</>;
}

export default App;
