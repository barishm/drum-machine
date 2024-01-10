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
            <button className="btn btn-warning mb-3" onClick={handlePowerChange} >
              Power
            </button>
          </div>
          <p id="display" className='mb-4'>&nbsp;{display}</p>
          <div className="volume-slider mb-4">
            <input max="1" min="0" step="0.01" onChange={handleVolumeChange} type="range" value={volume}></input>
          </div>
          <div className="control mt-2">
            <button className="btn btn-warning" onClick={handleBankChange}>
              Bank
            </button>
          </div>
        </div>
      );
}

export default ControlsContainer;