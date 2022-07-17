import { Search } from "./search";

export const Header = () => {
  return (
    <header className="vbox header">
      <img src="../img/title.png" alt="Global Cycling Network" />
      <img src="../img/menu.png" alt="Menu" />
      <Search />
    </header>
  );
};
