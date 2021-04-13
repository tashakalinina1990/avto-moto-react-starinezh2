import Logo from '../logo/logo';
import Menu from '../menu/menu';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <Menu />
      </div>
    </header>
  );
}

export default Header;