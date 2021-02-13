import ConstructionTopMsg from './temp/';
import About from './About';
import Research from './Research';
import Publications from './Publications';
import './index.css';

function PageBody(props) {
  const content = [<About />, <Research />, <Publications />];
  return (
    <div className="PageBody">
      <ConstructionTopMsg />
      {content[props.contentSelection]}
    </div>
  );
}

export default PageBody;
