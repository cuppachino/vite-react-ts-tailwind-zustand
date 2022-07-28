import { BearExample, LinkDocs } from '@/examples';

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
