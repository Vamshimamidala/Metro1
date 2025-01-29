   
import { stations}  from './Metro';   
export const  StationDropDown = ({handleChange, value}) => {
    return(
    <select value={value} onChange={handleChange}>
        <option>--Please Select--</option>
         
        {
        stations.map((station) => (
        <option key={station.id} value={station.name} style={{ color: station.color }}>
            {station.name}
        </option>
        ))
        }
    </select>
    )
}