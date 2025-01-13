import { headers } from 'next/headers';

export default async function Layout({ children }: { children: React.ReactNode }) {
    const headersList = await headers();
    const matchedPath = headersList.get('x-matched-path');
    console.log('x-matched-path:', matchedPath);

    return (
        <>
            {children}
        </>
    );
}
