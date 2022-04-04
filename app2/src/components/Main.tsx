import TestSharedComp from '@apps/shared/src/components/TestSharedComp';
import { useState } from 'react';

const Main = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div onClick={() => setClickCount(c => c + 1)}>
      <h3>App 2</h3>
      <TestSharedComp />
      <div>Click count: {clickCount}</div>
    </div>
  );
};

export default Main;
