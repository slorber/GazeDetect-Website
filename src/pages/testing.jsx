import { ReactMic } from "react-mic";
import React from "react";
import window from "global";

export default class testing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      isShowing: null,
    };
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    window.status = "Stop";
    window.upload = false;
  }

  componentDidMount() {
    this.setState({ isShowing: window.value });
  }

  startRecording() {
    this.setState({ record: true });
    window.status = "Stop";
  }

  stopRecording() {
    this.setState({ record: false });
    window.status = "Upload";
  }

  onStop(recordedBlob) {
    localStorage.setItem("temp", JSON.stringify(recordedBlob));
    console.log(JSON.parse(localStorage.getItem("temp")));
    window.upload = true;
  }

  render() {
    return typeof window !== "undefined" ? (
      <div>
        <div
          style={{
            position: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: "auto",
            height: "auto",
          }}
        >
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            onData={this.onData}
            strokeColor="#000000"
            echoCancellation={true}
            autoGainControl={true}
            noiseSuppression={true}
            backgroundColor="#FFFFFF"
          />
        </div>
        <div
          style={{
            position: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: "auto",
            height: "auto",
          }}
        >
          <button onClick={this.startRecording} type="button">
            Start
          </button>
          <button onClick={this.stopRecording} type="button">
            {status}
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            padding: "40px",
          }}
        >
          {console.log(window.upload)}
          {window.upload === true && (
            <audio
              controls
              src={JSON.parse(localStorage.getItem("temp")).blobURL}
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          )}
        </div>
      </div>
    ) : (
      /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    );
  }
}
