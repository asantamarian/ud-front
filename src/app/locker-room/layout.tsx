import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Sidebar from "~/components/sidebar";
import MainContent from '~/components/locker-room/mainContent'
export const metadata: Metadata = {
    title: "Unión Dragones",
    description: "Club Deportivo Unión Dragones",
    icons: [{ rel: "icon", url: "/brand/icono.ico" }],
};


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`drawer lg:drawer-open ${GeistSans.className}`}>
            <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <MainContent>{children}</MainContent>
            <Sidebar />
        </div>
    )
}