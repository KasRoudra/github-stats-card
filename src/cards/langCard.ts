import { makeRound } from "../utils";
import { language } from "../interfaces";

const getStack = (name: string, bg: string, percentage: number) => {
  return `
          <div class="stacks">
              <p>${name}</p>
              <div 
                 class="meter" 
                 percentage="${percentage}%">
                  <span 
                    style="width: ${percentage}%; 
                    background-color: ${bg}">
                  </span>
              </div>
          </div>
        `;
};

const getLinear = (bg: string, percentage: number) => {
  return `
          <span 
            style="width:${percentage}%; 
                   background-color: ${bg}">
          </span>
  `;
};

const getCompact = (name: string, bg: string, percentage: number) => {
  return `
            <div 
              class="langs">
                <span 
                  class="dot" 
                  style="background-color: ${bg}">
                </span>
                <span>${name} ${percentage}%</span>
            </div>
    `;
};

const getChart = (bg: string, percentage: number, langtotal: number) => {
  let rotation = percentage * 3.6;
  const circleRotation = makeRound(rotation);
  const portionRotation = makeRound(langtotal ? langtotal * 3.6 : 0);
  if (circleRotation === 360)
    return `
            <div class="fullcircle" style="background-color: ${bg}"></div>
    `;
  else if (circleRotation >= 180)
    return `
            <div 
              class="portion-block" 
              style="transform:rotate(${portionRotation - 0.2}deg)">
                <div 
                  class="circle" 
                  style="background-color: ${bg};
                         transform: rotate(180deg);">
                </div>
            </div>
            <div 
              class="portion-block" 
              style="transform:rotate(${portionRotation + 179}deg)">
                <div 
                  class="circle" 
                  style="background-color: ${bg};
                         transform: rotate(${circleRotation - 180 + 0.8}deg);">
                </div>
            </div>
    `;
  else
    return `
            <div 
              class="portion-block" 
              style="transform:rotate(${portionRotation - 1}deg)">
                <div 
                  class="circle" 
                  style="background-color: ${bg};
                         transform: rotate(${circleRotation + 1.1}deg);">
                </div>
            </div>
    `;
};

const langCard = (
  width: string,
  height: string | number,
  scale: string,
  layout: string,
  type: string,
  name: string,
  langsArray: Array<language>,
  hcolor: string,
  color: string,
  bgcolor: string,
  bdcolor: string,
  bdwidth: string,
  bggrad: string
) => {
  const header = `
          <h2>${name}'s Most Used Languages</h2>`;
  let stacks = `${header}`;
  let linear = `${header}
          <div 
            class="meter combinedmeter">`;
  let compact = `
          <div 
            class="compact"
            style="background: transparent">`;
  let chart = `${header}
          <div
            class="chart-block chart">
            `;
  let langtotal = 0;
  for (let lang of langsArray) {
    stacks += getStack(lang.name, lang.color, lang.percentage);
    compact += getCompact(lang.name, lang.color, lang.percentage);
    chart += getChart(lang.color, lang.percentage, langtotal);
    linear += getLinear(lang.color, lang.percentage);
    langtotal += lang.percentage;
  }
  linear += `
          </div>`;
  compact += `       </div>
          `;
  const piechart =
    chart +
    `       <p></p>
         </div>`;
  const donut =
    chart +
    `       <p class="center"></p>
         </div>`;
  let cardBody = `<div></div>`;
  if (layout === "compact") {
    if (type === "donut") {
      cardBody = donut + compact;
    } else if (type === "piechart") {
      cardBody = piechart + compact;
    } else {
      cardBody = linear + compact;
    }
  } else {
    cardBody = stacks;
  }
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" id="card">
  <!-- Designed and coded by KasRoudra(https://github.com/KasRoudra) -->
  <style>
    svg {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji;
      font-size: 14px;
      line-height: 21px;
    }
    #card {
      transform: scale(${scale});
    }
    p,
    span {
      color: ${color};
    }
    h2 {
      margin-top: 5px;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      color: ${hcolor};
    }

    foreignObject {
      width: calc(100% - 20px);
      height: calc(100% - 20px);
    }
    .body {
      width: calc(84% - 2px); /*Half of border-radius*/
      height: calc(81% - 2px);
      padding: 5%;
      padding-left: 7%;
      border: ${bdwidth}px solid ${bdcolor};
      border-radius: 4px;
      background-color: ${bgcolor};
      background-image: ${bggrad};
    }

    .stacks {
      width: 100%;
    }
    .stacks p {
      font-weight: 500;
    }
    .meter {
      width: 85%;
      height: 10px;
      margin-bottom: 7px;
      position: relative;
      background: #ddddee;
      -webkit-border-radius: 12px;
      border-radius: 12px;
    }

    /* Designed and coded by KasRoudra(https://github.com/KasRoudra) */ 

    .meter > span {
      display: block;
      height: 100%;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      background-color: #aaa5ff;
      position: relative;
      overflow: hidden;
    }
    .meter:after {
      position: absolute;
      content: attr(percentage);
      top: 0;
      right: 0;
      height: 20px;
      width: 20px;
      color: ${color};
      transform: translateX(30px) translateY(-5px);
    }
    .combinedmeter {
      display: flex;
    }
    .combinedmeter > span {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    .combinedmeter > span:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    .combinedmeter > span:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .compact {
      width: 100%;
      background-color: ${bgcolor};
      display: flex;
      flex-wrap: wrap;
      padding: 2% 0;
      justify-content: space-between;
    }
    .langs {
      margin-top: 10px;
      flex-basis: 50%;
      padding: 0.1px 0;
    }
    .langs span:nth-child(2) {
      padding: 0 3%;
    }
    .dot {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      display: inline-block;
    }
    .chart {
      position: relative;
      width: 200px;
      height: 200px;
      margin: 0 auto 2rem;
      border-radius: 100%;
    }
    p.center {
      background: ${bgcolor};
      position: absolute;
      text-align: center;
      font-size: 28px;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 90px;
      height: 90px;
      margin: auto;
      border-radius: 50%;
      line-height: 35px;
      padding: 0;
    }
    .portion-block {
      border-radius: 50%;
      clip: rect(0px, 200px, 200px, 100px);
      height: 100%;
      position: absolute;
      width: 100%;
    }
    .circle {
      border-radius: 50%;
      clip: rect(0px, 100px, 200px, 0px);
      height: 100%;
      position: absolute;
      width: 100%;
      font-family: monospace;
      font-size: 1.5rem;
    }
    .fullcircle {
      border-radius: 50%;
      height: 100%;
      position: absolute;
      width: 100%;
      font-family: monospace;
      font-size: 1.5rem;
    }
  </style>
    <foreignObject x="21" y="21">
        <div xmlns="http://www.w3.org/1999/xhtml" class="body">${cardBody}</div>
      </foreignObject>
</svg>
`;
};

export default langCard;
