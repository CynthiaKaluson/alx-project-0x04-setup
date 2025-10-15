import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-20"> {/* Add padding to account for fixed header */}
        {children}
      </main>
    </>
  );
};

export default Layout;
