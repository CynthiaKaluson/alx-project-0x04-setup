import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-white mb-8">Welcome to Splash App</h1>
      <div className="flex gap-4">
        <Link 
          href="/counter-app" 
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Counter App 🚀
        </Link>
      </div>
    </div>
  );
}
