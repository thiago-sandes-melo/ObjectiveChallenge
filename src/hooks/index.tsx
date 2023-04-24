import React, { ReactNode } from 'react';
import { ThemeProvider } from './Theme';

interface Props {
  children: ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }: Props) => {
  return (
      <ThemeProvider>{children}</ThemeProvider>
  );
};

export default AppProvider;
