import Header from '@/components/layout/Header';
import { useThemeStore } from '@/store/useThemeStore';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/shared/Modal';
import { useModalStore } from '@/store/useModalStore';

function App() {
  const initTheme = useThemeStore((state) => state.initTheme);
  const { isOpen } = useModalStore();
  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <>
      <Header />
      <main className="flex-1 w-full px-content py-10">
        <Outlet />
      </main>
      {isOpen && <Modal />}
      <Footer />
    </>
  );
}

export default App;
