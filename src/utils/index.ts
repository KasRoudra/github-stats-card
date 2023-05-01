import { join, resolve } from "path";
import { emojify } from "node-emoji";
import fetch from "cross-fetch";

const parseImage = async (imageUrl: string) => {
  const imageUrlData = await fetch(imageUrl);
  const buffer = await imageUrlData.arrayBuffer();
  const contentType = imageUrlData.headers.get("content-type");
  const stringifiedBuffer = Buffer.from(buffer).toString("base64");
  const imageBase64 = `data:image/${contentType};base64,${stringifiedBuffer}`;
  return imageBase64;
};

const parseString = (str: string) => {
  if (!str) return "";
  return emojify(str.replace(/&/g, "&amp;"));
};

const parseColor = (str: string) => {
  if (!str) return "";
  const reg = /([0-9a-f]{3}){1,2}$/i;
  const isColor = reg.test(str);
  if (isColor) return "#" + str;
  return str;
};

const parseNumber = (num: number, digits = 1) => {
  // Credit: https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};

const parsePath = (url: string) => join(resolve(), url);

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const makeRound = (num: number, digits = 2) =>
  Math.round(num * 10 ** digits) / 10 ** digits;

const layouts = {
  default: "default",
  compact: "compact",
};

const types = {
  linear: "linear",
  donut: "donut",
  piechart: "piechart",
};

export {
  parseColor,
  parseNumber,
  parseString,
  parseImage,
  parsePath,
  capitalize,
  makeRound,
  layouts,
  types,
};
