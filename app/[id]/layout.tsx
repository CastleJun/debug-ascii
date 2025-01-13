import { headers } from 'next/headers';

export default async function Layout({ children }: { children: React.ReactNode }) {
    const headersList = await headers();
    console.log(JSON.stringify(headersList, null, 2));

    return (
        <>
            {children}
        </>
    );
}
