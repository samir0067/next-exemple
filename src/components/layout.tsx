import React, {FC} from 'react';
import {Header} from "./header";

type LayoutProps = {
  children: JSX.Element | string | JSX.Element[];
  className?: string;
}

export const Layout: FC<LayoutProps> = ({children, className}: LayoutProps) => {

  return (
    <div className={className}>
      <Header/>
      <div className="container">
        {children}
      </div>
    </div>
  );
};
