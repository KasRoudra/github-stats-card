const errorCard = (message: string) => {
  return `<svg width="360" height="120" xmlns="http://www.w3.org/2000/svg">
  <style>
    svg {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji;
      font-size: 14px;
      line-height: 21px;
    }

    #background {
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      fill: red;
      stroke: rgb(225, 228, 232);
      stroke-width: 1px;
    }

    foreignObject {
      width: calc(100% - 10px - 32px);
      height: calc(100% - 10px - 32px);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      table-layout: auto;
    }

    th {
      padding: 0.5em;
      padding-top: 0;
      text-align: left;
      font-size: 14px;
      font-weight: 600;
      color: white;
    }

    tr {
      transform: translateX(-200%);
      animation-duration: 2s;
      animation-name: slideIn;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  </style>
  <g>
    <rect x="5" y="5" id="background" />
    <g>
      <foreignObject x="21" y="21" width="318" height="168">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <table>
            <thead>
              <tr style="transform: translateX(0)">
                <th colspan="2" id="name">${message}</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </foreignObject>
    </g>
  </g>
</svg>
`;
};

export default errorCard;
