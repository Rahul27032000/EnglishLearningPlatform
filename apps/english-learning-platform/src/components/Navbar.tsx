import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const session = useSession();
  return (
    <div>
      <nav className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out">
        <div className="flex justify-around p-4">
          <div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-black dark:text-white">
            <Link href={"/"}>ELP</Link>
          </div>
          <div className="flex justify-between space-x-5 text-lg items-center font-bold">
            <Link href={"/room"}>
              <h1 className="text-white">Room</h1>
            </Link>
            <Link href={"/game"}>
              <h1 className="text-white">Games</h1>
            </Link>
            <Link href={"/blog"}>
              <h1 className="text-white">Blog</h1>
            </Link>
          </div>
          {!session.data ? (
            <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
              <button className="px-6 py-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black">
                Sign in
              </button>

              <button
                onClick={() => signIn()}
                className="px-6 py-2 text-white transition duration-500 ease-out bg-blue-700 rounded-lg hover:bg-blue-800 hover:ease-in hover:underline"
              >
                Sign up
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
              <h1 className="text-white">{session.data.user?.name}</h1>

              <button
                onClick={() => signOut()}
                className="px-6 py-2 text-white transition duration-500 ease-out bg-blue-700 rounded-lg hover:bg-blue-800 hover:ease-in hover:underline"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
