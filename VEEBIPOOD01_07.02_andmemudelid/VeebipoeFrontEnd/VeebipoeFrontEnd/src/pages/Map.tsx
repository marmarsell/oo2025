import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet"

function Map() {

  return (
    <MapContainer className={"map"} center={[59.416, 24.805]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[59.416, 24.805]}>
      <Popup>
        [ EETN ] <br /> Lennart Meri airport
      </Popup>
    </Marker>
    <Marker position={[59.428, 24.793]}>
      <Popup>
        [ TOC ] <br /> Base of operations
      </Popup>
    </Marker>
    <Marker position={[59.438, 24.772]}>
      <Popup>
        [ TLU ] <br /> Tallinn University
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Map