import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f8fa] px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#8000FF] mb-6 text-center">iGroom Gaming Profile</h1>
      <p className="text-xl text-gray-500 mb-10 text-center">Профиль игрока - веб-приложение для управления игровым профилем</p>
      <Link href="/profile">
        <span className="inline-block bg-[#8000FF] hover:bg-[#a100ff] text-white text-lg font-semibold rounded-2xl px-10 py-4 transition-colors">Перейти к профилю</span>
      </Link>
    </div>
  );
}
