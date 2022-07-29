import cc from 'classcat';
import { useEffect, useState } from 'react';

import zustandBear from 'public/zustand.png';
import { getBears, useBearStore } from '@/stores/useBearStore';

const labelBears = (bears: number) => (bears === 1 ? 'bear' : 'bears');

function AddBearButton() {
  const [bears, addBear] = useBearStore((s) => [s.bears, s.addBear]);
  return (
    <button className='btn bg-mono-14' onClick={addBear}>
      {bears} {labelBears(bears)}
    </button>
  );
}

function DestroyBearsButton() {
  const removeAllBears = useBearStore((s) => s.removeAllBears);
  const [enabled, setEnabled] = useState(getBears() !== 0);
  const [suffix, setSuffix] = useState<'bear' | 'bears'>(labelBears(getBears()));

  useEffect(
    () =>
      useBearStore.subscribe((s) => {
        setEnabled(s.bears !== 0);
        setSuffix(labelBears(s.bears));
      }),
    [],
  );

  return (
    <button
      onClick={removeAllBears}
      className={cc({
        'btn hover:border-op-rose': true,
        'opacity-50 pointer-events-none': !enabled,
      })}>
      destroy {suffix}
    </button>
  );
}

export function BearExample() {
  return (
    <div className='grid gap-4'>
      <div className='mx-auto inline-flex space-x-10'>
        <AddBearButton />
        <DestroyBearsButton />
      </div>
      <a
        className='w-1/2 scale-75 mx-auto
        transition-all duration-300'
        href='https://github.com/pmndrs/zustand'
        target='blank'>
        <img src={zustandBear} className='object-cover' alt='Zustand Logo' />
      </a>
    </div>
  );
}
