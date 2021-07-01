import React, { Component } from "react";
import { getMergeSortAnimations } from "../src/sortingAlgorithms/mergesort.js";
import { getBubbleSortAnimations } from "../src/sortingAlgorithms/bubblesort.js";
import { getQuickSortAnimations } from "../src/sortingAlgorithms/quickSort.js";
import "./sortingvisualizer.css";
let playing = false;
let sorted = false;
let size, speed;
class SortingVisualisation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      isPlaying: false,
    };
  }

  componentDidMount() {
    this.resetArray();
  }
  resetArray() {
    if (playing === false) {
      sorted = false;
      const array = [];
      size = randomNoGenerator(10, 500);
      for (let i = 0; i < size; i++) {
        array.push(randomNoGenerator(5, 630));
      }
      this.setState({ array });
      const arrayBars = document.getElementsByClassName("array-bar");
      for (let i = 0; i < this.state.array.length; i++) {
        arrayBars[i].style.backgroundColor = "purple";
      }
      speed = (2 * 500) / size;
    }
  }
  quickSort() {
    console.log(this.state.array);
    if (playing === false && sorted === false) {
      playing = true;
      const animations = getQuickSortAnimations(this.state.array);
      console.log(animations);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("array-bar");
        let isColorChange = false;
        if (i % 4 === 0 || i % 4 === 1) {
          isColorChange = true;
        }
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? "red" : "purple";
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * speed);
        } else if (i % 4 === 2) {
          setTimeout(() => {
            const [barOneHeight, barTwoHeight, barOneIdx, barTwoIdx] =
              animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.height = `${barOneHeight}px`;
            barTwoStyle.height = `${barTwoHeight}px`;
          }, i * speed);
        } else if (i % 4 === 3) {
          setTimeout(() => {
            const [pivotBarIdx] = animations[i];
            if (pivotBarIdx !== 1000) {
              const pivotBarStyle = arrayBars[pivotBarIdx].style;
              pivotBarStyle.backgroundColor = "black";
            }
          }, i * speed);
        }
      }
      setTimeout(() => {
        playing = false;
        sorted = true;
        const arrayBars = document.getElementsByClassName("array-bar");
        for (let i = 0; i < this.state.array.length; i++) {
          setTimeout(() => {
            arrayBars[i].style.backgroundColor = "green";
          }, i * speed);
        }
      }, animations.length * speed);
    }
  }
  mergeSort() {
    if (playing === false && sorted === false) {
      playing = true;
      const animations = getMergeSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("array-bar");
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? "red" : "purple";
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * speed);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * speed);
        }
      }
      setTimeout(() => {
        playing = false;
        sorted = true;
        const arrayBars = document.getElementsByClassName("array-bar");
        for (let i = 0; i < this.state.array.length; i++) {
          setTimeout(() => {
            arrayBars[i].style.backgroundColor = "green";
          }, i * speed);
        }
      }, animations.length * speed);
    }
  }
  heapSort() {}
  bubbleSort() {
    if (playing === false && sorted === false) {
      playing = true;
      const animations = getBubbleSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("array-bar");
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? "red" : "purple";
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * speed);
        } else {
          setTimeout(() => {
            const [barOneHeight, barTwoHeight, barOneIdx, barTwoIdx] =
              animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.height = `${barOneHeight}px`;
            barTwoStyle.height = `${barTwoHeight}px`;
          }, i * speed);
        }
      }
      setTimeout(() => {
        playing = false;
        sorted = true;
        const arrayBars = document.getElementsByClassName("array-bar");
        for (let i = 0; i < this.state.array.length; i++) {
          setTimeout(() => {
            arrayBars[i].style.backgroundColor = "green";
          }, i * speed);
        }
      }, animations.length * speed);
    }
  }
  render() {
    const { array, isPlaying } = this.state;
    let sz = 920 / array.length;
    return (
      <div className="cont">
        We are Currently working on Heap Sort
        <div className="array-container">
          {array.map((value, indx) => (
            <div
              className="array-bar"
              key={indx}
              style={{
                backgroundColor: "purple",
                height: `${value}px`,
                width: `${sz}px`,
              }}
            ></div>
          ))}
        </div>
        <div className="button-container">
          <button
            className="btn btn-secondary m-2"
            onClick={() => this.resetArray()}
          >
            Reset Array
          </button>
          <button
            className="btn btn-success m-2"
            onClick={() => this.quickSort()}
          >
            Quick Sort
          </button>
          <button
            className="btn btn-warning m-2"
            onClick={() => this.mergeSort()}
          >
            Merge Sort
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => this.heapSort()}
          >
            Heap Sort
          </button>
          <button
            className={`btn m-2 ${isPlaying ? "btn-danger" : "btn-info"}`}
            onClick={() => this.bubbleSort()}
          >
            Bubble Sort
          </button>
        </div>
      </div>
    );
  }
}
function randomNoGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export default SortingVisualisation;
