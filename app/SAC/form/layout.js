import { verifySession } from "@/lib/session";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default async function DashboardLayout({ children }) {
    const user = await verifySession();
    if (!user) {
        redirect("/SAC");
    }

    return (
        <div className="min-h-screen bg-[#f5f5dc]">
            <nav className="bg-[#ceb083] border-b px-10 py-2 flex justify-between items-center">
                <span className="font-bold text-[#5e503f]">Conectado como: {user.email}</span>
                <LogoutButton />
            </nav>
            <main className="p-6">{children}</main>
        </div>
    );
}