import reactLogo from '@/assets/react.svg';
import tailwindLogo from '@/assets/tailwind.svg';
import typescriptLogo from '@/assets/typescript.svg';

export function LinkDocs() {
  return (
    <div
      className='relative overflow-hidden flex-shrink
                 flex w-full h-full min-h-[64px] max-h-[80px]
                 items-center justify-center '>
      <a className='docs-anchor scale-95' href='https://vitejs.dev' target='blank'>
        <img src='/vite.svg' className='h-full w-full aspect-square' alt='Vite logo' />
      </a>
      <a className='docs-anchor ml-5 mr-4' href='https://reactjs.org' target='blank' tabIndex={-1}>
        <img
          src={reactLogo}
          className='h-full w-full aspect-square scale-95 opacity-90 hover:opacity-100'
          alt='React logo'
        />
      </a>
      <a className='docs-anchor' href='https://tailwindcss.com' target='blank'>
        <img
          src={tailwindLogo}
          className='h-full w-full aspect-square scale-75'
          alt='Tailwind logo'
        />
      </a>
      <a className='docs-anchor' href='https://www.typescriptlang.org' target='blank'>
        <img
          src={typescriptLogo}
          className='h-full w-full aspect-square scale-[0.8]'
          alt='Typescript logo'
        />
      </a>
      <div className='absolute inset-x-0 -bottom-10 top-1/3 bg-gradient-to-t from-mono-14 pointer-events-none' />
    </div>
  );
}
