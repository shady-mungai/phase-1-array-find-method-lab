// code your solution here
const record = [
  { year: "2018", result: "N/A" },
  { year: "2017", result: "N/A" },
  { year: "2016", result: "N/A" },
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  { year: "2012", result: "N/A" },
];
function superbowlWin() {
  for (let item of record) {
    if (item.result === "W") {
      return '2015';
    } else {
      return undefined;
    }
  }
}
superbowlWin();
