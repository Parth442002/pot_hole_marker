import React from 'react';
import {GoogleMap,useLoadScript,Marker,InfoWindow} from '@react-google-maps/api'
import {formatRelative} from 'date-fns'
import "@reach/combobox/styles.css"

const libraries=["places"]
const mapContainerStyle={
  width:'100vw',
  height:'100vh'
}
const center={
  lat: 43.6532,
  lng: -79.3832,
}
const options={
  styles={}
}

function App() {
  const {isLoaded,loadError}=useLoadScript({
    googleMapsApiKey : "AIzaSyB9ya-AB2zslTaSGpr-BEv0yCj_UM8ptOs",
    libraries:libraries,
  })
  if (loadError) return "Error Loading Maps"
  if (!isLoaded) return "Loading Maps"
  return(
    <GoogleMap
    mapContainerStyle={mapContainerStyle}
    zoom={8}
    center={center}
    options={options}
    ></GoogleMap>
  )
}

export default App;
