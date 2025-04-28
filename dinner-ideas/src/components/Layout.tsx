import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="px-4 py-8">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md mx-auto">{children}</div>
      </div>
    </>
  );
}

export default Layout;
