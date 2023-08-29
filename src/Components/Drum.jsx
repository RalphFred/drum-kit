import {useState, useEffect} from 'react';
import {crashAudio, kickAudio, snareAudio, tom1Audio, tom2Audio, tom3Audio, tom4Audio} from '../assets';

const Drum = (props) => {

    const [animate, setAnimate] = useState("");

    const handleClick = () => {
        var audioPlay = new Audio(props.source.audio);
        audioPlay.play();

        setAnimate("opacity-[0.5]");

        setTimeout(() => setAnimate(""), 100)
    }

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener('keydown', handleKeyPress);
    
        // Clean up the event listener when the component unmounts
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, []);
    
    
       const handleKeyPress = (e) => {
    
        switch (e.key) {
          case "w":
          case "W":
            const crashPlay = new Audio(crashAudio)
            crashPlay.play();
            break;
          case "a":
          case "A":
            const kickPlay = new Audio(kickAudio)
            kickPlay.play();
            break;
          case "s":
          case "S":
            const snarePlay = new Audio(snareAudio)
            snarePlay.play();
            break;
          case "d":
          case "D":
            const tom1Play = new Audio(tom1Audio)
            tom1Play.play();
            break;
          case "j":
          case "J":
            const tom2Play = new Audio(tom2Audio)
            tom2Play.play();
            break;
          case "k":
          case "K":
            const tom3Play = new Audio(tom3Audio)
            tom3Play.play();
            break;
          case "l":
          case "L":
            const tom4Play = new Audio(tom4Audio)
            tom4Play.play();
            break;
          default:
            console.log("I was clicked");
        }
    
      };


  return (
    <div>
        <div
        className={`w-[80px] h-[90px] md:w-[90px] md:h-[100px] lg:w-[160px] lg:h-[160px] mx-1 mb-4 lg:mx-4 lg:mb-12 flex justify-center items-center rounded-2xl bg-white relative border-8 border-gray-400 ${animate}`}
        >
            <img 
                src={props.source.src} 
                alt={props.source.id} 
                onClick={handleClick}
                className="h-[70px] w-[70px] lg:h-[130px] lg:w-[130px] object-contain rounded-2xl"
            />
            <h1 
            className="text-6xl text-center font-bold absolute bottom-0 text-pink-700 drop-shadow-lg select-none"
            onClick={handleClick}
            >
                {props.source.letter}
            </h1>
        </div>
    </div>
  )
}

export default Drum