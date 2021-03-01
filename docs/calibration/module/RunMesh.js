import React, { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import { drawMesh } from "../../tracking/debugging/utilities";

export default function RunMesh() {
    alert(blobFile.file)
    const videoRef = useRef(null);
    var video = document.getElementById("video");
    video.src = window.URL.createObjectURL(blobFile.file);
    console.log(blobFile.file)
    return (
        <main>
         <Video
            ref={video}
            style={{
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: "auto",
            height: "auto",
            }}
        />
        </main>
    )
    // tf.ready();
    // const canvasRef = useRef(null);
    // const videoRef = useRef(null);
    // const runFacemesh = async () => {
    //     const net = await facemesh.load(
    //     facemesh.SupportedPackages.mediapipeFacemesh, {backend: 'webgl', maxFaces: 1, detectionConfidence: 0.8, predictIrises: true}
    //     );
    //     setInterval(() => {
    //     detect(net);
    //     }, 10);
    // };

    // const detect = async (net) => {
    //     const video = document.createElementById('video');
    //     video.src = window.URL.createObjectURL(globalVariable.x)
    //     const videoWidth = webcamRef.current.video.videoWidth;
    //     const videoHeight = webcamRef.current.video.videoHeight;

    //     webcamRef.current.video.width = videoWidth;
    //     webcamRef.current.video.height = videoHeight;

    //     canvasRef.current.width = videoWidth;
    //     canvasRef.current.height = videoHeight;

    //     const face = await net.estimateFaces({ input: video });
    //     console.log(face);

    //     const ctx = canvasRef.current.getContext("2d");
    //     requestAnimationFrame(() => {
    //         drawMesh(face, ctx);
    //     });
    // }

    // useEffect(() => {
    //     runFacemesh();
    // }, []);

    // return (
    //     <main>
    //     <Video
    //         ref={videoRef}
    //         style={{
    //         position: "relative",
    //         marginLeft: "auto",
    //         marginRight: "auto",
    //         left: 0,
    //         right: 0,
    //         textAlign: "center",
    //         zindex: 9,
    //         width: "auto",
    //         height: "auto",
    //         }}
    //     />

    //     <canvas
    //         ref={canvasRef}
    //         style={{
    //         position: "absolute",
    //         marginLeft: "auto",
    //         marginRight: "auto",
    //         left: 0,
    //         right: 150,
    //         textAlign: "center",
    //         zindex: 9,
    //         width: "auto",
    //         height: "auto",
    //         }}
    //     />
    //     </main>
    // );
}
