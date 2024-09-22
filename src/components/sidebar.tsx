'use client'


import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {  LayoutDashboard, Users, BookOpen, LogOut } from 'lucide-react'

const sidebarItems = [
    { href: "/locker-room", label: "Home", icon: LayoutDashboard },
    { href: "/locker-room/teams", label: "Equipos", icon: Users },
    { href: "/locker-room/playbook", label: "Playbook", icon: BookOpen }
]

export default function Sidebar() {
    const pathname = usePathname()


    return (
        <div className="drawer-side">
            <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                <li className="mb-4">
                    <Link href="/locker-room" className="flex items-center px-2 py-3">
                        <Image
                            src="/brand/logo.png"
                            alt="Company Logo"
                            width={150}
                            height={50}
                            className="max-w-full h-auto"
                        />
                    </Link>
                </li>
                {sidebarItems.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={pathname === item.href ? 'active' : ''}
                        >
                            {item.icon && <item.icon className="w-6 h-6"/>}
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li key='/logout'>
                    <Link
                        href="/logout"
                        className={pathname === '/logout' ? 'active' : ''}
                    >
                        {LogOut && <LogOut className="w-6 h-6"/>}
                        {'Logout'}
                    </Link>
                </li>
            </ul>
        </div>
    )
}