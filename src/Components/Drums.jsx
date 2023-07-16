import { sources } from '../constants';
import Drum from './Drum';

const Drums = () => {

  return (
    <div className="grid grid-cols-7 py-36">
        {sources.map((source, index) => (
          <Drum key={index} source={source}/>
        ))
        }

    </div>
  )
}

export default Drums


