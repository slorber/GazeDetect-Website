import Layout from "@theme/Layout";
import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import {drawMesh} from "./debugging/utilities"

function EyeTesting() {
  const faceLandmarksDetection = require("@tensorflow-models/face-landmarks-detection");
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
  const runModel = async () => {
    const net = await faceLandmarksDetection.load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh);
    setInterval(() => {
        detect(net);
      }, 0);
  };
  
  const detect = async (net) => {
    if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
        const face = await net.estimateFaces({input:video});
        console.log(face);
        const ctx = canvasRef.current.getContext("2d");
        requestAnimationFrame(()=>{drawMesh(face, ctx)});
  };
}
  runModel();
  return (
    <Layout>
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: "0",
          right: "0",
          textAlign: "center",
          zIndex: "9",
          width: "640",
          height: "480",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: "0",
          right: "0",
          textAlign: "center",
          zIndex: "9",
          width: "640",
          height: "480",
        }}
      />
    </Layout>
  );
}

export default EyeTesting;
