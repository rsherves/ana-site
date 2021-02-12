import './index.css';

function MenuEntry(props) {
  return (
    <div className="menu-entry" onClick={props.onClick}>
      <div className="entry-button">
        {props.value}
      </div>
      <div className={"entry-selection " + props.selected}></div>
    </div>
  );
}

function Menu(props) {
  const entries = [
    "About me", "Research", "Publications"
  ].map((value, index) => {
    const selected = props.contentSelection === index ? "selected" : "";
    return (
      <MenuEntry
        key={index}
        value={value}
        selected={selected}
        onClick={() => props.onClick(index)}
      />
    );
  });

  return (
    <div className="Menu">
      <div className="flex-container row-wrap center">
        {entries}
      </div>
    </div>
  );
}

function PageHeader(props) {
  return (
    <header className="PageHeader">
      <Menu onClick={props.onClick} contentSelection={props.contentSelection} />
    </header>
  );
}

export default PageHeader;
