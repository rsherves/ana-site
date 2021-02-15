import React from 'react';
import PublicationData from './PublicationData.js';
import './Publications.css';

function SortColumnIcon(props) {
  if (props.isSortedAsc) {
    return <span className="sort-by-icon">&#9652;</span>;
  } else if (props.isSortedDesc) {
    return <span className="sort-by-icon">&#9662;</span>;
  } else {
    return null;
  }
}

function PublicationTableHeadCol(props) {
  return (
    <th>
      <span
        className="sort-by no-user-select"
        onClick={() => props.onClick(props.colName)}
      >
        {props.displayName}
        <SortColumnIcon
          isSortedAsc={props.isSortedAsc}
          isSortedDesc={props.isSortedDesc}
        />
      </span>
    </th>
  );
}

function PublicationTableRow(props) {
  return (
    <tr>
      <td>
        <div className="pub-title">{props.data.title}</div>
        <div className="pub-authors">{props.data.authors}</div>
        <div className="pub-source">{props.data.source}</div>
      </td>
      <td>
        <div className="pub-date">{props.data.date.getFullYear()}</div>
      </td>
    </tr>
  );
}

class Publications extends React.Component {
  constructor(props) {
    super(props);
    const currentSort = {
      colName: 'date',
      desc: true,
    };
    this.state = {
      currentSort: currentSort,
      publications: PublicationData().getAll(currentSort),
    };
  }

  handleSortClick(colName) {
    const desc = this.state.currentSort.colName === colName && !this.state.currentSort.desc;
    const sortOptions = {colName: colName, desc: desc};
    this.setState({
      currentSort: sortOptions,
      publications: PublicationData().getAll(sortOptions),
    });
  }

  render() {
    const currentSort = this.state.currentSort;
    const headCols = [
      {colName: 'title', displayName: 'Title'},
      {colName: 'date', displayName: 'Year'},
    ].map((obj, i) => {
      const isSorted = currentSort.colName === obj.colName;
      const isSortedAsc = isSorted && !currentSort.desc;
      const isSortedDesc = isSorted && currentSort.desc;
      return (
        <PublicationTableHeadCol
          key={i}
          colName={obj.colName}
          displayName={obj.displayName}
          onClick={(colName) => this.handleSortClick(colName)}
          isSortedAsc={isSortedAsc}
          isSortedDesc={isSortedDesc}
        />
      );
    });

    const publications = this.state.publications.map((p, i) => {
      return (
        <PublicationTableRow key={i} data={p} />
      );
    });

    return(
      <div className="Publications">
        <div className="page-wrapper">
          <div className="page-header">Scientific articles published:</div>
          <div className="table-wrapper">
            <table id="publications-table">
              <thead>
                <tr>
                  {headCols}
                </tr>
              </thead>
              <tbody>
                {publications}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Publications;