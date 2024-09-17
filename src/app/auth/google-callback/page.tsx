'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import pb from '../../../../lib/pocketbase';

export default function GoogleCallback() {
    const router = useRouter();
console.log("asdasdasd")
    useEffect(() => {
        const completeOAuth = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code'); // OAuth code
            const state = urlParams.get('state'); // Optional state, if applicable
            console.log("adasdasd")
            if (!code) {
                console.error('OAuth code not found in the URL.');
                return router.push('/login');
            }

            try {
                // Complete OAuth flow by passing all required parameters
                await pb.collection('users').authWithOAuth2Code(
                    'google', // The provider name (google in this case)
                    code,     // The OAuth code
                    '',       // Code verifier (usually empty)
                    `${window.location.origin}/auth/google-callback`, // Redirect URL
                );

                // Redirect to the protected page after successful login
                alert('Login successful!');
                router.push('/locker-room');
            } catch (error) {
                console.error('OAuth login failed:', error);
                router.push('/login'); // Redirect back to login on failure
            }
        };

        // Await the completeOAuth call to avoid floating promises
        void completeOAuth(); // You can also use `void` if you don't want to await in `useEffect`.
    }, [router]);


    return <div>Loading...</div>;
}