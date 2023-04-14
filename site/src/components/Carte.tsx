
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import '../style/Carte.css';

 type Props = {
  position: [number, number];
  text:string ;
  
};

const flagIcon = new L.Icon({ 
   iconUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/640px-Google_Maps_pin.svg.png',
   iconSize:[16,32],
   iconAnchor:[16,32],
})

// eslint-disable-next-line no-empty-pattern
export const Carte: React.FC<Props> = ({position , text}) => {
 // const positions: [number, number] = [50.6927,3.1778];

  return (
    <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={flagIcon}>
        <Popup>
          {text}
        </Popup>
      </Marker>
     
    </MapContainer>
  );
};