import './index.css';

function MenuEntry(props) {
  return (
    <div className="menu-entry" onClick={props.onClick}>
      <div className="entry-button">
        {props.value}
      </div>
      <div className="entry-selection"></div>
    </div>
  );
}

function Menu(props) {
  return (
    <div className="flex-container">
      <MenuEntry onClick={() => props.onClick(0)} value="About me" />
      <MenuEntry onClick={() => props.onClick(1)} value="Research" />
      <MenuEntry onClick={() => props.onClick(2)} value="Publications" />
    </div>
  );
}

function PageHeader(props) {
  return (
    <header className="PageHeader">
      <Menu onClick={props.onClick} />
    </header>
  );
}

export default PageHeader;
