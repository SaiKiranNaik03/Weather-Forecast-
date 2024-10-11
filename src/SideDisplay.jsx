import CurrentDateTime from './CurrentDateTime';
import './SideDisplay.css';
import backgroundImage from './assets/bgi.jpg'; 
import { GenGif} from './help';

function SideDisplay({city,temp}) {
  let styling = { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover",
  backgroundRepeat: "no-repeat"};

  let City = capitalizeFirstLetter(city);

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  let gifSrc = GenGif(temp);

  return (
    <div style={styling} className="side-display">
        <div className="info">
            <span className='head'>{City}</span>
            <span className='temp'>{temp}&deg;C</span>
            <span><img src={gifSrc} alt="" /></span>
            {/* <span><i className="fa-solid fa-cloud icon" ></i></span> */}
            < CurrentDateTime/>
        </div>
    </div>
  );
}

export default SideDisplay;
