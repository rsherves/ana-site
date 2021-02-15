import React from 'react';
import PublicationData from './PublicationData.js';
import './Publications.css';

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
    const sortBy = {
      colName: 'date',
      desc: true,
    };
    this.state = {
      sortBy: sortBy,
      publications: PublicationData().getAllSortedByDate({desc: true}),
    };
  }

  sortBy(options) {
    if (options.colName === 'title') {
      this.setState({
        publications: PublicationData().getAllSortedByTitle({desc: options.desc}),
        sortBy: options,
      });
    } else if (options.colName === 'date') {
      this.setState({
        publications: PublicationData().getAllSortedByDate({desc: options.desc}),
        sortBy: options,
      });
    }
  }

  handleSortClick(colName) {
    const desc = this.state.sortBy.colName === colName && !this.state.sortBy.desc;
    this.sortBy({colName: colName, desc: desc,});
  }

  render() {
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
                  <th>
                    <span
                      className="sort-by"
                      onClick={() => this.handleSortClick('title')}
                    >
                      Title<span className="sort-by-icon">&#9652;</span>
                    </span>
                  </th>
                <th>
                  <span
                    className="sort-by"
                    onClick={() => this.handleSortClick('date')}
                  >
                    Year<span className="sort-by-icon">&#9662;</span>
                  </span>
                </th>
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