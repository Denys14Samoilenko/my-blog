import Link from "next/link";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link href="/" id="logo" className="logo-link">
        <i className="icon-blogger2 "></i>
      </Link>
      <Link href="/favourites" className="favourites-nav">
        Favourite Posts
      </Link>
    </header>
  );
};
export default Header;
