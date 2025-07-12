import Navbar from '@/components/Navbar';
import '../globals.css';

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <Navbar />
            {children}
        </main>
    );
}

export default Layout;
