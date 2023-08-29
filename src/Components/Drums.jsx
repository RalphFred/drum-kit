import { sources } from '../constants';
import Drum from './Drum';

const Drums = () => {

  return (
    <div className="w-screen flex flex-wrap justify-around items-center mt-16 px-2">
        {sources.map((source, index) => (
          <Drum key={index} source={source}/>
        ))
        }

    </div>
  )
}

export default Drums


