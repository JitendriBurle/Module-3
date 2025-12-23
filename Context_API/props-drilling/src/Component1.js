import Component2 from "./component2";
import { AppContext } from "./AppContext";

const Component1 = () => {
  const data = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
    f: 60,
  };

  return (
    <AppContext.Provider value={data}>
      <Component2 />
    </AppContext.Provider>
  );
};

export default Component1;
