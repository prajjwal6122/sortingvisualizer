// const bubbleSort = () => {
//   if (isPlaying === false && isSorted === false) {
//     setIsPlaying(true);
//     const animations = getBubbleSortAnimations(copiedArray);
//     for (let i = 0; i < animations.length; i++) {
//       const arrayBars = document.getElementsByClassName("array-bar");
//       const isColorChange = i % 3 !== 2;
//       if (isColorChange) {
//         const [barOneIdx, barTwoIdx] = animations[i];
//         const barOneStyle = arrayBars[barOneIdx].style;
//         const barTwoStyle = arrayBars[barTwoIdx].style;
//         const color = i % 3 === 0 ? "red" : "purple";
//         setTimeout(() => {
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * speed);
//       } else {
//         setTimeout(() => {
//           const [barOneHeight, barTwoHeight, barOneIdx, barTwoIdx] =
//             animations[i];
//           const barOneStyle = arrayBars[barOneIdx].style;
//           const barTwoStyle = arrayBars[barTwoIdx].style;
//           barOneStyle.height = `${barOneHeight}px`;
//           barTwoStyle.height = `${barTwoHeight}px`;
//         }, i * speed);
//       }
//     }
//     setTimeout(() => {
//       setIsPlaying(false);
//       setIsSorted(true);
//       const arrayBars = document.getElementsByClassName("array-bar");
//       for (let i = 0; i < array.length; i++) {
//         setTimeout(() => {
//           arrayBars[i].style.backgroundColor = "green";
//         }, i * speed);
//       }
//     }, animations.length * speed);
//   }
// };

// const mergeSort = () => {
//   if (isPlaying === false && isSorted === false) {
//     setIsPlaying(true);
//     const animations = getMergeSortAnimations(copiedArray);
//     for (let i = 0; i < animations.length; i++) {
//       const arrayBars = document.getElementsByClassName("array-bar");
//       const isColorChange = i % 3 !== 2;
//       if (isColorChange) {
//         const [barOneIdx, barTwoIdx] = animations[i];
//         const barOneStyle = arrayBars[barOneIdx].style;
//         const barTwoStyle = arrayBars[barTwoIdx].style;
//         const color = i % 3 === 0 ? "red" : "purple";
//         setTimeout(() => {
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * speed);
//       } else {
//         setTimeout(() => {
//           const [barOneIdx, newHeight] = animations[i];
//           const barOneStyle = arrayBars[barOneIdx].style;
//           barOneStyle.height = `${newHeight}px`;
//         }, i * speed);
//       }
//     }
//     setTimeout(() => {
//       setIsPlaying(false);
//       setIsSorted(true);
//       const arrayBars = document.getElementsByClassName("array-bar");
//       for (let i = 0; i < array.length; i++) {
//         setTimeout(() => {
//           arrayBars[i].style.backgroundColor = "green";
//         }, i * speed);
//       }
//     }, animations.length * speed);
//   }
// };

//const quickSort = () => {
//   console.log(this.state.array);
//   if (isPlaying === false && isSorted === false) {
//     setIsPlaying(true);
//     const animations = getQuickSortAnimations(array);
//     console.log(animations);
//     for (let i = 0; i < animations.length; i++) {
//       const arrayBars = document.getElementsByClassName("array-bar");
//       let isColorChange = false;
//       if (i % 4 === 0 || i % 4 === 1) {
//         isColorChange = true;
//       }
//       if (isColorChange) {
//         const [barOneIdx, barTwoIdx] = animations[i];
//         const barOneStyle = arrayBars[barOneIdx].style;
//         const barTwoStyle = arrayBars[barTwoIdx].style;
//         const color = i % 4 === 0 ? "red" : "purple";
//         setTimeout(() => {
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * speed);
//       } else if (i % 4 === 2) {
//         setTimeout(() => {
//           const [barOneHeight, barTwoHeight, barOneIdx, barTwoIdx] =
//             animations[i];
//           const barOneStyle = arrayBars[barOneIdx].style;
//           const barTwoStyle = arrayBars[barTwoIdx].style;
//           barOneStyle.height = `${barOneHeight}px`;
//           barTwoStyle.height = `${barTwoHeight}px`;
//         }, i * speed);
//       } else if (i % 4 === 3) {
//         setTimeout(() => {
//           const [pivotBarIdx] = animations[i];
//           if (pivotBarIdx !== 1000) {
//             const pivotBarStyle = arrayBars[pivotBarIdx].style;
//             pivotBarStyle.backgroundColor = "black";
//           }
//         }, i * speed);
//       }
//     }
//     setTimeout(() => {
//       setIsPlaying(false);
//       setIsSorted(true);
//       const arrayBars = document.getElementsByClassName("array-bar");
//       for (let i = 0; i < array.length; i++) {
//         setTimeout(() => {
//           arrayBars[i].style.backgroundColor = "green";
//         }, i * speed);
//       }
//     }, animations.length * speed);
//   }
// };

//   setTimeout(() => {
//     setIsPlaying(false);
//     setIsSorted(true);
//     const arrayBars = document.getElementsByClassName("array-bar");
//     for (let i = 0; i < array.length; i++) {
//       setTimeout(() => {
//         arrayBars[i].style.backgroundColor = "green";
//       }, i * speed);
//     }
//   }, animations.length * speed);

{
  /* <div className="button-container">
            <button
              className={`btn m-2 ${
                isPlaying ? "btn-danger" : "btn-secondary"
              }`}
              onClick={() => resetArray()}
              disabled={isPlaying}
            >
              Reset to Same Array
            </button>
            <button
              className={`btn m-2 ${isPlaying ? "btn-danger" : "btn-dark"}`}
              onClick={() => insertionSort()}
              disabled={isPlaying}
            >
              Insertion Sort
            </button>
            <button
              className={`btn m-2 ${isPlaying ? "btn-danger" : "btn-success"}`}
              onClick={() => quickSort()}
              disabled={isPlaying}
            >
              Quick Sort
            </button>
            <button
              className={`btn m-2 ${isPlaying ? "btn-danger" : "btn-warning"}`}
              onClick={() => mergeSort()}
              disabled={isPlaying}
            >
              Merge Sort
            </button>
            <button
              className={`btn m-2 ${isPlaying ? "btn-danger" : "btn-primary"}`}
              onClick={() => heapSort()}
              disabled={isPlaying}
            >
              Heap Sort
            </button>
            <button
              className={`btn m-2 ${isPlaying ? "btn-danger" : "btn-info"}`}
              onClick={() => bubbleSort()}
              disabled={isPlaying}
            >
              Bubble Sort
            </button>
            <div className="ms-4">
              <label for="shade" className="form-label mt-2">
                Size {size}
              </label>
              <input
                type="range"
                id="shade"
                name="shade"
                min="10"
                max="500"
                className="form-range ms-3"
                onChange={(event) => changeArraySize(event)}
                disabled={isPlaying}
              />
            </div>
          </div> */
}

// const changeArray = (size) => {
//   if (isPlaying === false) {
//     setIsSorted(false);
//     const arr = [];
//     for (let i = 0; i < size; i++) {
//       arr.push(randomNoGenerator(5, 630));
//     }
//     setArray(arr);
//     setCopiedArray([...arr]);
//     setSameArray([...arr]);
//     setWidth(920 / arr.length);
//     const arrayBars = document.getElementsByClassName("array-bar");
//     for (let i = 0; i < array.length; i++) {
//       arrayBars[i].style.backgroundColor = "purple";
//     }
//     setSpeed((2 * 500) / size);
//     return arr;
//   }
// };
