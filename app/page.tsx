import { redirect } from "next/navigation";
import Link from "next/link";
import { Component } from "./component";

export default function Page() {
  return (
      <div>
        <form
            action={async () => {
              "use server";
              redirect("/한글");
            }}
        >
          <button>Server redirect</button>
        </form>
        <Component />
        <Link href="/한글">Link</Link>
      </div>
  );
}