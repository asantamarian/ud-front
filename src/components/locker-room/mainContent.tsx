'use client'

import { Menu } from 'lucide-react'

export default function MainContent({ children }: { children: React.ReactNode }) {
    return (
        <div className="drawer-content flex flex-col">
            <div className="w-full navbar bg-base-300 lg:hidden">
                <div className="flex-none">
                    <label htmlFor="sidebar-drawer" className="btn btn-square btn-ghost">
                        <Menu className="inline-block w-6 h-6 stroke-current" />
                    </label>
                </div>
                <div className="flex-1 px-2 mx-2">Locker Room</div>
            </div>
            <main className="flex-1 overflow-y-auto mx-3">
                {children}
            </main>
        </div>
    )
}