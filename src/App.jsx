import Title from './Components/Title';
import Drums from './Components/Drums';

function App() {


  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800">
      <div>
        <Title />
        <Drums />
      </div>
    </div>
  )
}

export default App
