'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        await fetch('/api/logout', { method: 'POST' });
        router.refresh();
        router.push('/SAC');
    }

    return (
        <button
            onClick={handleLogout}
            className="text-red-600 hover:text-red-800 font-medium px-5 py-1 border-3 border-red-400 rounded-lg bg-red-200 hover:bg-red-50"
        >
            Sair
        </button>
    );
}