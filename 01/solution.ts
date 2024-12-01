import { rawData } from "./data.js";

const dataArray = rawData.replace(/\n/g, " ").split(/\s+/);

const dataClean = dataArray.map((indexValue) => parseInt(indexValue));

const groupOneList = dataClean.filter((value, index) => index % 2 === 0);
const groupTwoList = dataClean.filter((value, index) => index % 2 === 1);

const groupOneSorted = groupOneList.sort((a, b) => a - b);
const groupTwoSorted = groupTwoList.sort((a, b) => a - b);

const distance = groupOneSorted.reduce(
  (accumulator: number, currentValue: number, index: number) => {
    if (currentValue > groupTwoSorted[index]) {
      return accumulator + (currentValue - groupTwoSorted[index]);
    } else {
      return accumulator + (groupTwoSorted[index] - currentValue);
    }
  },
  0
);

console.log("Distance: ", distance);

const similarityScore = groupOneList.reduce(
  (accumulator: number, currentValue: number, index: number) => {
    const count = groupTwoList.filter(
      (filterValue) => filterValue === currentValue
    );
    return accumulator + currentValue * count.length;
  },
  0
);

console.log("Similarity Score: ", similarityScore);
