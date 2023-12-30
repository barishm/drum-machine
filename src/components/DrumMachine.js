import PadBank from "./PadBank";
import Logo from "./Logo";
import ControlsContainer from "./ControlsContainer";

const DrumMachine = () => {

    return(
        <div className="inner-container" id="drum-machine">
            <PadBank/>
            <Logo/>
            <ControlsContainer/>
        </div>
    );
}
export default DrumMachine;