import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("test");
  }, []);

  return <h1>Hello World</h1>;
};

export default App;
