// lib/pocketbase.ts
import PocketBase from 'pocketbase';

const backendUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL;
if (!backendUrl) {
    throw new Error('PocketBase URL is missing in environment variables.');
}
const pb = new PocketBase(backendUrl);

export default pb;
