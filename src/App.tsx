import React, { useContext } from 'react';

type StateType = {
  count: number
}

const TestContext = React.createContext({} as StateType); // ここで共有したいcontextを作成する

function App() {
  const localCount = 33;

  // contextを使用したいコンポーネント(Test1)にcontextを提供する
  return (
    <div className="App">
      <div>App</div>
      <TestContext.Provider value={{count: localCount}}>
        <Test1/>
      </TestContext.Provider>
    </div>
  );
}

export default App;

const Test1 = () => {
  const textContext = useContext(TestContext);  // ここで使用するcontextを指定する

  return (
    <>
      <div>Test1</div>
      <div>{textContext.count}</div>
    </>
  );
}
