import cc from 'classcat';
import { useEffect, useState } from 'react';

import reactLogo from '@/assets/react.svg';
import tailwindLogo from '@/assets/tailwind.svg';
import typescriptLogo from '@/assets/typescript.svg';
import zustandBear from '@/assets/zustand.png';
import { getBears, useBearStore } from '@/stores/store';

export function Welcome() {
  return (
    <div className='relative max-w-[80vw] grid gap-16 sm:gap-20 h-fit items-center justify-center m-auto pt-8 p-4 sm:p-16 text-center'>
      <div className='grid gap-8 sm:gap-10 '>
        <h1 className='heading-lg'>Vite Typescript React Tailwind</h1>
        <h2 className='heading-md select-none'>Click an icon to see docs</h2>
      </div>
      <LinkDocs />
      <BearExample />
    </div>
  );
}

function BearExample() {
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
        target='_blank'>
        <img src={zustandBear} className='object-cover' />
      </a>
    </div>
  );
}

function DestroyBearsButton() {
  const removeAllBears = useBearStore((s) => s.removeAllBears);
  const [enabled, setEnabled] = useState(getBears() !== 0);

  useEffect(
    () =>
      useBearStore.subscribe((s) => {
        setEnabled(s.bears !== 0);
      }),
    [],
  );

  return (
    <button
      onClick={removeAllBears}
      className={cc({
        'btn': true,
        'opacity-50 pointer-events-none': !enabled,
      })}>
      destroy {enabled ? 'bear' : 'bears'}
    </button>
  );
}
function AddBearButton() {
  const [bears, addBear] = useBearStore((s) => [s.bears, s.addBear]);

  return (
    <button className='btn bg-mono-14' onClick={addBear}>
      {bears} {bears === 1 ? 'bear' : 'bears'}
    </button>
  );
}

function LinkDocs() {
  return (
    <>
      <div
        className='relative overflow-hidden flex-shrink
                 flex w-full h-full min-h-[64px] max-h-[80px]
                 items-center justify-center '>
        <a className='docs-anchor scale-95' href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='h-full w-full aspect-square' alt='Vite logo' />
        </a>
        <a
          className='docs-anchor ml-5 mr-4'
          href='https://reactjs.org'
          target='_blank'
          tabIndex={-1}>
          <img
            src={reactLogo}
            className='h-full w-full aspect-square scale-95 opacity-90 hover:opacity-100'
            alt='React logo'
          />
        </a>
        <a className='docs-anchor' href='https://tailwindcss.com' target='_blank'>
          <img
            src={tailwindLogo}
            className='h-full w-full aspect-square scale-75'
            alt='Tailwind logo'
          />
        </a>
        <a className='docs-anchor' href='https://www.typescriptlang.org' target='_blank'>
          <img
            src={typescriptLogo}
            className='h-full w-full aspect-square scale-[0.8]'
            alt='Typescript logo'
          />
        </a>
        <div className='absolute inset-x-0 -bottom-10 top-1/3 bg-gradient-to-t from-mono-14 pointer-events-none' />
      </div>
    </>
  );
}
