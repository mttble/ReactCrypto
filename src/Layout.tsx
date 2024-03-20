import React, { ReactNode } from 'react';
import TopNavMenu from './TopNavMenu';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopNavMenu />
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
      <footer style={{ flexShrink: 0 }}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

