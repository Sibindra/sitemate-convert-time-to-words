// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  const hr = time.split(":")[0];
  const min = time.split(":")[1];

  const numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ];

  // [1,2,3,4] = [one, two , three ]

  if (hr === "0" && min === "00") {
    return "midnight";
  }

  if (hr !== "0" && min === "00") {
    return `${numberWords[hr]} o'clock`;
  }

  if (hr !== "0" && min === "30") {
    return `half past ${numberWords[Number(hr)]}`;
  }

  if (hr !== "0" && Number(min) > 0 && Number(min) < 30) {
    return `${numberWords[Number(min)]} past ${numberWords[Number(min)]}`;
  }

  if (hr !== "0" && min === "15") {
    return `quarter past ${numberWords[Number(min)]}`;
  }

  if (hr !== "0" && min === "45") {
    return `quarter to ${numberWords[Number(hr) + 1]}`;
  }

  if (hr !== "0" && Number(min) > 30 && Number(min) < 59) {
    return `${numberWords[60 - Number(min)]} past ${numberWords[Number(min)]}`;
  }
}

module.exports = { convertTimeToWords };

/**
 * 0.0 - midnight
 *
 *
 * 12.0 - midday
 *
 * 1.0 - oclock
 *
 * 0-30 - min past hr
 *
 * 15 mins - quater
 *
 * .30 - half past hr
 *
 * 30-59 - (60-mins) past to hr
 */
