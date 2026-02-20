import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import './PageLayout.css';

export function PageLayout() {
  return (
    <div className="page-layout">
      <Header />
      <main className="page-layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
