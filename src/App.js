import React, { useState } from 'react';
import {GoogleMap,useLoadScript,Marker,InfoWindow} from '@react-google-maps/api'
import {formatRelative} from 'date-fns'
import "@reach/combobox/styles.css"
import mapStyles from './mapStyles';

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
  styles:mapStyles,
  disableDefaultUI:true,
  zoomControl:true,


}

function App() {
  const {isLoaded,loadError}=useLoadScript({
    googleMapsApiKey : "AIzaSyB9ya-AB2zslTaSGpr-BEv0yCj_UM8ptOs",
    libraries:libraries,
  })
  const [markers,setMarkers]=useState([]);
  if (loadError) return "Error Loading Maps"
  if (!isLoaded) return "Loading Maps"
  return(
    <div>
      <h1>Pot Hole Marker 🚧</h1>
      <GoogleMap
    mapContainerStyle={mapContainerStyle}
    zoom={8}
    center={center}
    options={options}
    onClick={(event)=>{
        setMarkers(current=>[...current,{
          lat:event.latLng.lat(),
          lng:event.latLng.lng(),
          time:new Date(),
        }])
      }
    }
    >
      {markers.map(marker=>
        <Marker
          key={marker.time.toISOString}
          position={{lat:marker.lat,lng:marker.lng}}
          icon={{
            url:'/pothole.svg',
            scaledSize:new window.google.maps.Size(30,30),
            origin:new window.google.maps.Point(0,0),
            anchor:new window.google.maps.Point(15,15)
          }}
        />
        )}
    </GoogleMap>
    </div>

  )
}

export default App;
