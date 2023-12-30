import { useDispatch, useSelector } from 'react-redux';
import {setPower, setVolume, setBank, setDisplay} from '../redux/toolSlice'
const ControlsContainer = () => {
    const dispatch = useDispatch();
    const { power, volume, display, bank } = useSelector((state) => state.tool);

    const handleBankChange = () => {
        const newBank = bank === 'Heater Kit' ? 'Smooth Piano Kit' : 'Heater Kit';
        dispatch(setBank(newBank));
        dispatch(setDisplay(newBank));
    };

    const handlePowerChange = () => {
        dispatch(setPower());
        if(power){
            dispatch(setDisplay("OFF"));
        }else{
            dispatch(setDisplay("ON"));
        }
    }

    const handleVolumeChange = (e) => {
        dispatch(setVolume(e.target.value));
        const displayVolume = parseFloat((volume * 100).toFixed(2));
        dispatch(setDisplay(`Volume: ${displayVolume}`))
    }

    return (
        <div className="controls-container">
          <div className="control">
            <p>Power</p>
            <div className="select" onClick={handlePowerChange} >
              <div className="inner" style={{ float: power ? 'right' : 'left' }}></div>
            </div>
          </div>
          <p id="display">&nbsp;{display}</p>
          <div className="volume-slider">
            <input max="1" min="0" step="0.01" onChange={handleVolumeChange} type="range" value={volume}></input>
          </div>
          <div className="control">
            <p>Bank</p>
            <div className="select" onClick={handleBankChange}>
              <div className="inner" style={{ float: bank === 'Heater Kit' ? 'left' : 'right' }}></div>
            </div>
          </div>
        </div>
      );
}

export default ControlsContainer;