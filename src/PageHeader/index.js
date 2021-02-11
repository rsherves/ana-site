import './index.css';

function MenuEntry(props) {
  return (
    <div className="menu-entry">
      <div className="entry-button">
        {props.value}
      </div>
      <div className="entry-selection"></div>
    </div>
  );
}

function Menu() {
  return (
    <div className="flex-container">
      <MenuEntry value="About me" />
      <MenuEntry value="Research" />
      <MenuEntry value="Publications" />
    </div>
  );
}

function PageHeader() {
  return (
    <header className="PageHeader">
      <Menu />
    </header>
  );
}

export default PageHeader;
