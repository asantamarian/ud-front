// app/logout/page.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import pb from '~/lib/pocketbase';

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        const handleLogout = () => {
            pb.authStore.clear(); // Clear the authStore in PocketBase

            // Optionally, clear cookies if you're using them for authentication
            document.cookie = 'auth-token=; Max-Age=0; path=/';

            // Redirect to login or home page after logout
            router.push('/login');
        };

        handleLogout();
    }, [router]);

    return <div>Logging out...</div>;
}
