import PadBank from "./PadBank";
import Logo from "./Logo";
import ControlsContainer from "./ControlsContainer";

const DrumMachine = () => {

    return(
        <div className="inner-container rounded shadow-lg" id="drum-machine">
            <PadBank/>
            <Logo/>
            <ControlsContainer/>
        </div>
    );
}
export default DrumMachine;