import React from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';

interface INavigatorCompProps {

}

export const NavigatorComp = (props: INavigatorCompProps) => {

  return (
    <div className='w-full h-14 flex items-center justify-center md:justify-between border-b border-gray-200 px-4'>
      <Logo />
      <Menu />
    </div>
  );
}
