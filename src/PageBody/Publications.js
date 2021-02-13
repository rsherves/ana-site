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
    this.state = {
      publications: PublicationData().getAllSortedByDate(),
    };
  }

  render() {
    const publications = this.state.publications.map((p, i) => {
      return (
        <PublicationTableRow key={i} data={p} />
      );
    });
    return(
      <div className="Publications">
        <div className="publications-header">List of articles published</div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {publications}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Publications;