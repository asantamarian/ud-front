import Link from "next/link";

export default function Sidebar(){
    return (
        <div className="card h-screen w-64 bg-base-100 shadow-xl flex flex-col p-4">
            <div className="text-center text-xl font-bold mb-6">
                My Sidebar
            </div>
            <ul className="menu">
                <li>
                    <Link href="/admin" className="active:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/admin/teams" className="hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                        Teams
                    </Link>
                </li>
                <li>
                    <Link href="#" className="hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                        Settings
                    </Link>
                </li>
                <li>
                    <Link href="#" className="hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    )
}