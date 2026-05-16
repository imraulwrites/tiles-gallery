import Link from 'next/link';
import SignInStatus from './SignInStatus';

function NavbarPage() {
  return (
    <div className="">
      <nav className="w-full border-b px-2 md:px-6">
        <header className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="font-extrabold text-brick-red text-2xl font-stretch-125% ">
                Tiles Galore
              </p>
            </Link>
          </div>

          {/* Menu */}

          <ul className="flex items-center gap-6 text-base font-bold uppercase text-center md:text-left">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/all-tiles">All Tiles</Link>
            </li>
            <li>
              <Link href="/my-profile">My Profile</Link>
            </li>
          </ul>

          {/* SignIn / SignOut Status */}
          <SignInStatus />
        </header>
      </nav>
    </div>
  );
}

export default NavbarPage;
