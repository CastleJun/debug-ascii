import { headers } from 'next/headers';

export default async function Layout({ children }: { children: React.ReactNode }) {
    const headersList = await headers();
    console.log('Layout Headers:');
    for (const [key, value] of headersList.entries()) {
        console.log(`${key}: ${value}`);
    }

    return (
        <>
            {children}
        </>
    );
}
