import { Welcome } from '@/pages/Welcome';
import { useState } from 'react';

function App() {
  return (
    <div className='relative w-screen h-screen box-border overflow-y-auto flex flex-col'>
      <Welcome />
    </div>
  );
}

export default App;

