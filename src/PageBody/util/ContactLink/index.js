import './index.css';

function ContactLink(props) {
  return (
    <div className="ContactLink">
      <a 
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={props.imgSource} alt={props.altText} />    
      </a>
    </div>      
  );
}

export default ContactLink;