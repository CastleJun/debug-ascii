import { redirect } from "next/navigation";
import Link from "next/link";
import { Component } from "./component";

export default function Page() {
    const decodedKorean = encodeURI('/한글');

    return (
      <div>
          <form
              action={async () => {
                  "use server";
                  redirect(decodedKorean);
              }}
          >
              <button>Server redirect</button>
          </form>
          <Link href="/한글">Link</Link>

<div>---------------------</div>
          <form
              action={async () => {
                  "use server";
                  redirect("/test");
              }}
          >
              <button>Server redirect</button>
          </form>
          <Link href="/test">Link</Link>
      </div>
  );
}