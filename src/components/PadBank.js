import { useDispatch, useSelector } from "react-redux";
import { setDisplay } from "../redux/toolSlice";
import { useEffect } from "react";

const PadBank = () => {
  const dispatch = useDispatch();
  const { bank, volume, power } = useSelector((state) => state.tool);
  const handleKeyDown = (event) => {
    if(event.key === 'q' || event.key === 'Q'){
      playAudio("Q");
    } else if(event.key === 'w' || event.key === 'W') {
      playAudio("W");
    } else if(event.key === 'e' || event.key === 'E') {
      playAudio("E");
    } else if(event.key === 'a' || event.key === 'A') {
      playAudio("A");
    } else if(event.key === 's' || event.key === 'S') {
      playAudio("S");
    } else if(event.key === 'd' || event.key === 'D') {
      playAudio("D");
    } else if(event.key === 'z' || event.key === 'Z') {
      playAudio("Z");
    } else if(event.key === 'x' || event.key === 'X') {
      playAudio("X");
    } else if(event.key === 'c' || event.key === 'C') {
      playAudio("C");
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const HK = {
    Heater1: "Heater-1",
    Heater2: "Heater-2",
    Heater3: "Heater-3",
    Heater4: "Heater-4",
    Clap: "Clap",
    OpenHH: "Open-HH",
    KickN: "Kick-n",
    Kick: "Kick",
    ClosedHH: "Closed-HH",
  };
  const PK = {
    Chord1: "Chord-1",
    Chord2: "Chord-2",
    Chord3: "Chord-3",
    Shaker: "Shaker",
    OpenHH: "Open-HH",
    ClosedHH: "Closed-HH",
    PunchyKick: "Punchy-Kick",
    SideStick: "Side-Stick",
    Snare: "Snare",
  };

  //Heater Kit Sources
  const HKS = {
    Heater1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    Heater2: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    Heater3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    Heater4: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    Clap: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    OpenHH: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    KickN: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    Kick: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    ClosedHH: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  };
  //Piano Kit Sources
  const PKS = {
    Chord1: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    Chord2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    Chord3: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    Shaker: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    OpenHH: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    ClosedHH: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    PunchyKick: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    SideStick: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    Snare: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  };

  const playAudio = (id) => {
    const audioElement = document.getElementById(id);
    if (!audioElement) {
      console.error(`Audio element with id ${id} not found`);
      return;
    }
  
    const value = audioElement.getAttribute('value');
    audioElement.currentTime = 0;
  
    if (value && power) {
      audioElement.volume = volume;
      audioElement.play().catch((error) => {
        console.error(`Error playing audio: ${error}`);
      });
      dispatch(setDisplay(value));
    }
  };



  return (
    <div className="pad-bank">
      <div
        className="drum-pad"
        id={bank === "Heater Kit" ? HK.Heater1 : PK.Chord1}
        onClick={() => {playAudio("Q")}}
        style={{
          backgroundColor: "grey",
          marginTop: "10px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        <audio
          className="clip"
          id="Q"
          src={bank === "Heater Kit" ? HKS.Heater1 : PKS.Chord1}
          value={bank === "Heater Kit" ? HK.Heater1 : PK.Chord1}
        ></audio>
        Q
      </div>
      <div
        className="drum-pad"
        id={bank === "Heater Kit" ? HK.Heater2 : PK.Chord2}
        onClick={() => {playAudio("W")}}
        style={{
          backgroundColor: "grey",
          marginTop: "10px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        <audio
          className="clip"
          id="W"
          src={bank === "Heater Kit" ? HKS.Heater2 : PKS.Chord2}
          value={bank === "Heater Kit" ? HK.Heater2 : PK.Chord2}
        ></audio>
        W
      </div>
      <div
        className="drum-pad"
        id={bank === "Heater Kit" ? HK.Heater3 : PK.Chord3}
        onClick={() => {playAudio("E")}}
        style={{
          backgroundColor: "grey",
          marginTop: "10px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        <audio
          className="clip"
          id="E"
          src={bank === "Heater Kit" ? HKS.Heater3 : PKS.Chord3}
          value={bank === "Heater Kit" ? HK.Heater3 : PK.Chord3}
        ></audio>
        E
      </div>
      <div
        className="drum-pad"
        id={bank === "Heater Kit" ? HK.Heater4 : PK.Shaker}
        onClick={() => {playAudio("A")}}
        style={{
          backgroundColor: "grey",
          marginTop: "10px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        <audio
          className="clip"
          id="A"
          src={bank === "Heater Kit" ? HKS.Heater4 : PKS.Shaker}
          value={bank === "Heater Kit" ? HK.Heater4 : PK.Shaker}
        ></audio>
        A
      </div>
      <div
        className="drum-pad"
        id={bank === "Heater Kit" ? HK.Clap : PK.OpenHH}
        onClick={() => {playAudio("S")}}
        style={{
          backgroundColor: "grey",
          marginTop: "10px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        <audio
          className="clip"
          id="S"
          src={bank === "Heater Kit" ? HKS.Clap : PKS.OpenHH}
          value={bank === "Heater Kit" ? HK.Clap : PK.OpenHH}
        ></audio>
        S
      </div>
      <div
        className="drum-pad"
        id={bank === "Heater Kit" ? HK.OpenHH : PK.ClosedHH}
        onClick={() => {playAudio("D")}}
        style={{
          backgroundColor: "grey",
          marginTop: "10px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        <audio
          className="clip"
          id="D"
          src={bank === "Heater Kit" ? HKS.OpenHH : PKS.ClosedHH}
          value={bank === "Heater Kit" ? HK.OpenHH : PK.ClosedHH}
        ></audio>
        D
      </div>
      <div
        className="drum-pad"
        id={bank === "Heater Kit" ? HK.KickN : PK.PunchyKick}
        onClick={() => {playAudio("Z")}}
        style={{
          backgroundColor: "grey",
          marginTop: "10px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        <audio
          className="clip"
          id="Z"
          src={bank === "Heater Kit" ? HKS.KickN : PKS.PunchyKick}
          value={bank === "Heater Kit" ? HK.KickN : PK.PunchyKick}
        ></audio>
        Z
      </div>
      <div
        className="drum-pad"
        id={bank === "Heater Kit" ? HK.Kick : PK.SideStick}
        onClick={() => {playAudio("X")}}
        style={{
          backgroundColor: "grey",
          marginTop: "10px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        <audio
          className="clip"
          id="X"
          src={bank === "Heater Kit" ? HKS.Kick : PKS.SideStick}
          value={bank === "Heater Kit" ? HK.Kick : PK.SideStick}
        ></audio>
        X
      </div>
      <div
        className="drum-pad"
        id={bank === "Heater Kit" ? HK.ClosedHH : PK.Snare}
        onClick={() => {playAudio("C")}}
        style={{
          backgroundColor: "grey",
          marginTop: "10px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        <audio
          className="clip"
          id="C"
          src={bank === "Heater Kit" ? HKS.ClosedHH : PKS.Snare}
          value={bank === "Heater Kit" ? HK.ClosedHH : PK.Snare}
        ></audio>
        C
      </div>
    </div>
  );
};
export default PadBank;
