import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full justify-center items-center flex-col h-[100vh] gap-20">
      <h1 className="text-5xl font-bold">Aplikasi Penyimpanan Contact</h1>
      <Link
        href="/contacts"
        className="bg-blue-600 text-white px-3 py-1 hover:bg-blue-700"
      >
        Get Started
      </Link>
    </div>
  );
}
