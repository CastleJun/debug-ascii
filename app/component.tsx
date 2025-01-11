"use client";

import { useRouter } from "next/navigation";

export function Component() {
    const router = useRouter();
    return (
        <button
            onClick={() => {
                router.push("/한글");
            }}
        >
            Client redirect
        </button>
    );
}