import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HouseInfoContext } from './context/houseInfo';
import { HomePage } from './pages/homePage';

function App() {

  // interface IHouseInfo {
  //   area: number,
  //   useableArea: number
  // }

  useEffect(() => {
    document.title = 'Predict house\'s price';
  }, []);

  // const [area, setArea] = useState(0)
  // const [useableArea, setUseableArea] = useState(0)
  // const [bedroomNumber, setBedroomNumber] = useState(0)
  // const [bathroomNumber, setBathroomNumber] = useState(0)
  // const [floorNumber, setFloorNumber] = useState(0)
  // const [hasLegalDocuments, setHasLegalDocuments] = useState(false)
  // const [houseType, setHouseType] = useState("")
  // const [furnitureStatus, setFurnitureStatus] = useState("")
  // const [location, setLocation] = useState("")
  // const [price, setPrice] = useState(0)

  const [houseInfo, setHouseInfo] = useState({})

  return (
    <HouseInfoContext.Provider value={{
      // area, setArea,
      // useableArea, setUseableArea,
      // bedroomNumber, setBedroomNumber,
      // bathroomNumber, setBathroomNumber,
      // floorNumber, setFloorNumber,
      // hasLegalDocuments, setHasLegalDocuments,
      // houseType, setHouseType,
      // furnitureStatus, setFurnitureStatus,
      // location, setLocation,
      // price, setPrice
      houseInfo, setHouseInfo
    }}>
      <HomePage/>
    </HouseInfoContext.Provider>

  )
}

export default App
