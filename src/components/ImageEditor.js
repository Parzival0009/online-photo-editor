import React, { useState, useRef } from "react";
import { fabric } from "fabric";
import { FileUploader } from "react-drag-drop-files";
import Selector from "./Selector";
import "./ImageEditor.css";

import shapesIcon from "../assets/images/shapes-icon.png";
import cropIcon from "../assets/images/crop-icon.png";
import rotateIcon from "../assets/images/rotate-icon.png";
import resizeIcon from "../assets/images/resize-icon.png";
import uploadIcon from "../assets/images/upload-icon.png";
import textIcon from "../assets/images/text.png";
import horizontalIcon from "../assets/images/horizontal-icon.png";
import verticalIcon from "../assets/images/vertical-icon.png";
import circle from "../assets/images/Circle.png";
import square from "../assets/images/Square.png";
import triangle from "../assets/images/Triangle.png";
import rectangle from "../assets/images/Rectangle.png";
import star from "../assets/images/Star.png";
import arrowIcon from "../assets/images/arrow.svg";
import Circle from "../assets/images/circle.svg";
import Square from "../assets/images/square.svg";
import Triangle from "../assets/images/triangle.svg";
import Star from "../assets/images/star.svg";
import Rectangle from "../assets/images/rectangle.svg";

function ImageEditor() {
  const imgTypes = [Circle, Square, Triangle, Rectangle, Star];
  const fileTypes = ["JPG", "PNG"];

  const [imgFile, setImgFile] = useState(null);
  const [selection, setSelection] = useState({});
  const [resizeWidth, setResizeWidth] = useState(null);
  const [resizeHeight, setResizeHeight] = useState(null);
  const [inputText, setInputText] = useState(null);
  const [isImageUpload, setIsImageUpload] = useState(false);

  const [color, setColor] = useState("#f22626");
  const [id, setId] = useState(0);
  const [rotateDeg, setRotateDeg] = useState(0);

  const [previousState, setPreviousState] = useState(null);
  const [fabricCanvas, setFabricCanvas] = useState(null);

  const [isCropClicked, setIsCropClicked] = useState(false);
  const [isRotateClicked, setIsRotateClicked] = useState(false);
  const [isResizeClicked, setIsResizeClicked] = useState(false);
  const [isShapesClicked, setIsShapesClicked] = useState(false);
  const [isTextClicked, setIsTextClicked] = useState(false);

  const [mainCanvasVisibleStyle, setMainCanvasVisibleStyle] = useState({
    display: "inline-block",
  });
  const [selectorVisibleStyle, setSelectorVisibleStyle] = useState({
    display: "none",
  });
  const [canvasVisible, setCanvasVisisble] = useState({
    display: "inline-block",
  });
  const [fabricCanvasVisible, setFabricCanvasVisisble] = useState({
    display: "none",
  });


  const resultCanvas = useRef(null);

  function loadFabricCanvas(file) {
    fabric.Image.fromURL(file, function (oImg) {
      fabricCanvas.setBackgroundImage(oImg);
      fabricCanvas.renderAll();
    });
    setFabricCanvas(fabricCanvas);
  }

  function loadFile(e) {
    // Task 1 Code here
  }

  function handleChange(file) {
    // Task 2 Code here
  }

  function loadCanvas(file) {
      // Task 3 Code here
  }

  function cropImg() {
    // Task 4 Code here
  }

  function rotate(degrees) {
    // Task 5 Code here
  }

  function resize(width, height) {
    // Task 6 Code here
  }

  function drawImages(id) {
    // Task 7 Code here
  }


  function addText(text) {
    // Task 8 Code here
  }

  function applyButton() {
    // Task 9 Code here
  }

  function cancelButton() {
    // Task 10 Code here
  }

  function downloadImg() {
    // Task 11 Code here
  }

  function makeSelection(pixels) {
    setSelection(pixels);
  }

  function toggleSelector(isToggled) {
    if (isToggled) {
      setSelectorVisibleStyle({ display: "inline-block" });
      setMainCanvasVisibleStyle({ display: "none" });
    } else {
      setSelectorVisibleStyle({ display: "none" });
      setMainCanvasVisibleStyle({ display: "inline-block" });
    }
  }

  return (
    <div className="imageEditor">
      {!isImageUpload ? (
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center heading pt-5 pb-2">
              Online Photo Editor
            </div>
            <div className="d-flex justify-content-center">
            </div>

            <div className="d-flex justify-content-center align-items-center p-4">
              <FileUploader
                handleChange={handleChange}
                types={fileTypes}
                children={
                  <div>
                    <div className="d-flex justify-content-center align-items-center fileDrag">
                      <div className="d-flex justify-content-center align-items-center">
                        <img className="w-50" src={uploadIcon} alt="img" />
                      </div>
                    </div>
                  </div>
                }
              />
            </div>

            <div className=" pt-3 pb-3 d-flex justify-content-center">
              <label className="uploadButton pt-2 pb-2 ps-4 pe-4">
                Upload an Image
                <input type="file" id="fileBrowser" onChange={loadFile} />
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="col-2 sidebar d-flex flex-column justify-content-center align-items-center">
            <a
              id="crop"
              href="#Crop"
              className={isCropClicked ? "activeButton" : ""}
              onClick={() => {
                setCanvasVisisble({ display: "inline-block" });
                setFabricCanvasVisisble({ display: "none" });
                toggleSelector(true);
                setIsCropClicked(true);
                setIsRotateClicked(false);
                setIsShapesClicked(false);
                setIsResizeClicked(false);
                setIsTextClicked(false);
                setId(1);
              }}
            >
              <img className="ms-1 w-50" src={cropIcon} alt="img" />
              <br />
              Crop
            </a>

            <a
              id="rotate"
              href="#rotate"
              className={isRotateClicked ? "activeButton" : ""}
              onClick={() => {
                setCanvasVisisble({ display: "inline-block" });
                setFabricCanvasVisisble({ display: "none" });
                setIsCropClicked(false);
                setIsRotateClicked(true);
                setIsShapesClicked(false);
                setIsResizeClicked(false);
                setIsTextClicked(false);
                toggleSelector(false);
                setId(2);
              }}
            >
              <img className="ms-1 w-50" src={rotateIcon} alt="img" />
              <br />
              Rotate
            </a>

            <a
              id="resize"
              href="#resize"
              className={isResizeClicked ? "activeButton" : ""}
              onClick={() => {
                setCanvasVisisble({ display: "inline-block" });
                setFabricCanvasVisisble({ display: "none" });
                setIsCropClicked(false);
                setIsResizeClicked(true);
                setIsShapesClicked(false);
                setIsRotateClicked(false);
                setIsTextClicked(false);
                toggleSelector(false);
                setId(3);
              }}
            >
              <img className="ms-1 w-50" src={resizeIcon} alt="img" />
              <br />
              Resize
            </a>

            <a
              id="shapes"
              href="#shapes"
              className={isShapesClicked ? "activeButton" : ""}
              onClick={() => {
                loadFabricCanvas(imgFile);
                setCanvasVisisble({ display: "none" });
                setFabricCanvasVisisble({ display: "inline-block" });
                setIsCropClicked(false);
                setIsShapesClicked(true);
                setIsResizeClicked(false);
                setIsRotateClicked(false);
                setIsTextClicked(false);
                toggleSelector(false);
                setId(4);
              }}
            >
              <img className="ms-1 w-50" src={shapesIcon} alt="img" />
              <br />
              Shapes
            </a>

            <a
              id="addText"
              href="#addText"
              className={isTextClicked ? "activeButton" : ""}
              onClick={() => {
                loadFabricCanvas(imgFile);
                setCanvasVisisble({ display: "none" });
                setFabricCanvasVisisble({ display: "inline-block" });
                setIsCropClicked(false);
                setIsResizeClicked(false);
                setIsShapesClicked(false);
                setIsRotateClicked(false);
                setIsTextClicked(true);
                toggleSelector(false);
                setId(5);
              }}
            >
              <img className="ms-1 w-50" src={textIcon} alt="img" />
              <br />
              Text
            </a>
          </div>

          <div className="col-12 pe-5">
            <div className="d-flex justify-content-between pe-5">
              <div className="logoText">
                  <a href="/"> Online Photo Editor </a>
              </div>
              {isCropClicked ||
              isRotateClicked ||
              isResizeClicked ||
              isTextClicked ||
              isShapesClicked ? (
                <div>
                  <button
                    className="cancelButton me-4"
                    onClick={() => cancelButton()}
                  >
                    Cancel
                  </button>
                  <button
                    className="applyButton pb-2 pt-2 ps-4 pe-4 me-4"
                    onClick={() => applyButton()}
                  >
                    Apply
                  </button>
                  <button
                    className="downloadButton pb-2 pt-2 ps-3 pe-3"
                    onClick={() => downloadImg()}
                  >
                    Download
                    <img src={arrowIcon} className="w-25 ps-2" alt="img" />
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="downloadButton pb-2 pt-2 ps-3 pe-3"
                    onClick={() => downloadImg()}
                  >
                    Download
                    <img src={arrowIcon} className="w-25 ps-2" alt="img" />
                  </button>
                </div>
              )}
            </div>
            <div style={mainCanvasVisibleStyle}>
              <canvas
                style={canvasVisible}
                className="canvas mb-3"
                ref={resultCanvas}
                width="800"
                height="800"
                id="canvas"
              ></canvas>
              <div style={fabricCanvasVisible}>
                <canvas
                  className="canvas mb-3"
                  width="800"
                  height="800"
                  id="canvas2"
                ></canvas>
              </div>
            </div>

            <div style={selectorVisibleStyle}>
              <Selector
                imgFile={imgFile}
                // imgSrc={imgSrc}
                // img={canvas}
                makeSelection={(pixels) => {
                  makeSelection(pixels);
                }}
                toggleSelector={(toggle) => {
                  toggleSelector(toggle);
                }}
              />
            </div>

            {isRotateClicked ? (
              <div className="d-flex justify-content-center pt-3 pb-3">
                <button className="rotate" onClick={(degrees) => rotate(90)}>
                  <img src={verticalIcon} className="pb-2" alt="img" />
                  <br />
                  <label className="pe-2">Rotate Vertical</label>
                </button>
                <button className="rotate" onClick={(degrees) => rotate(180)}>
                  <img src={horizontalIcon} className="pb-2" alt="img" />
                  <br />
                  <label>Rotate Horizontal</label>
                </button>
              </div>
            ) : (
              <div></div>
            )}
            {isResizeClicked ? (
              <div className="d-flex justify-content-center pt-3 pb-3 ">
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Width</label>
                  <div className="col-10 ps-4 pe-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder={resizeWidth}
                      value={resizeWidth}
                      onChange={(e) => {
                        setResizeWidth(e.target.value);
                        resize(e.target.value, resizeHeight);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label pe-2">Height</label>
                  <div className="col-10 ps-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder={resizeHeight}
                      value={resizeHeight}
                      onChange={(e) => {
                        setResizeHeight(e.target.value);
                        resize(resizeWidth, e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {isShapesClicked ? (
              <div className="d-flex justify-content-center pt-3 pb-3 mt-5">
                <button
                  style={{ border: "none" }}
                  type="button"
                  onClick={() => {
                    drawImages(1);
                  }}
                >
                  <img src={circle} alt="img" />
                </button>
                <button
                  style={{ border: "none" }}
                  type="button"
                  onClick={() => {
                    drawImages(2);
                  }}
                >
                  <img src={square} alt="img" />
                </button>
                <button
                  style={{ border: "none" }}
                  type="button"
                  onClick={() => {
                    drawImages(3);
                  }}
                >
                  <img src={triangle} alt="img" />
                </button>
                <button
                  style={{ border: "none" }}
                  type="button"
                  onClick={() => {
                    drawImages(4);
                  }}
                >
                  <img src={rectangle} alt="img" />
                </button>
                <button
                  style={{ border: "none" }}
                  type="button"
                  onClick={() => {
                    drawImages(5);
                  }}
                >
                  <img src={star} alt="img" />
                </button>
                <div
                  className="ms-3 mt-3 d-flex justify-content-center align-items-center"
                  style={{
                    border: "1px solid #000000",
                    borderRadius: "9px",
                    width: "80px",
                    height: "30px",
                  }}
                >
                  <label>
                    <span
                      className="circle mt-2 me-2"
                      style={{ backgroundColor: color }}
                    />
                    <input
                      className="hidden"
                      type="color"
                      value={color}
                      onChange={(e) => {
                        setColor(e.target.value);
                      }}
                    />
                  </label>
                  <span className="colorText">{color}</span>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {isTextClicked ? (
              <div className="d-flex justify-content-center pt-3 pb-3 mt-5">
                <input
                  placeholder="Enter text..."
                  type="text"
                  onChange={(e) => {
                    setInputText(e.target.value);
                  }}
                />
                <button
                  className="addButton ps-3 pe-3"
                  onClick={() => {
                    addText(inputText);
                  }}
                >
                  Add
                </button>
                <div
                  className="ms-3 mt-1 d-flex justify-content-center align-items-center"
                  style={{
                    border: "1px solid #000000",
                    borderRadius: "9px",
                    width: "80px",
                    height: "30px",
                  }}
                >
                  <label>
                    <span
                      className="circle mt-2 me-2"
                      style={{ backgroundColor: color }}
                    />
                    <input
                      className="hidden"
                      type="color"
                      value={color}
                      onChange={(e) => {
                        setColor(e.target.value);
                      }}
                    />
                  </label>
                  <span className="colorText">{color}</span>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageEditor;
