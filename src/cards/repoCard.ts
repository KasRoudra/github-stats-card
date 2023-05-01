import { repoLanguages } from "../interfaces";

const repoCard = (
  layout: string,
  width: string,
  height: string,
  scale: string,
  name: string,
  description: string,
  languages: repoLanguages,
  starCount: string | number,
  forkCount: string | number,
  issueCount: string | number,
  prCount: string | number,
  watcherCount: string | number,
  commitCount: string | number,
  changeCount: string | number,
  hcolor: string,
  color: string,
  bgcolor: string,
  bdcolor: string,
  bdwidth: string,
  bggrad: string
) => {
  if (layout === "compact")
    return `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" id="card">
  <!-- Designed and coded by KasRoudra(https://github.com/KasRoudra) -->
  <style>
  svg {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    font-size: 14px;
    line-height: 21px;
  }

  #card {
    transform: scale(${scale});
  }
  
  
  foreignObject {
    width: calc(100% - 30px);
    height: calc(100% - 40px);
  }

  .main {
    width: calc(100% - 2px); /*Half of border-radius*/
    height: calc(100% - 2px);
    border: 1px solid #e1e4e8;
    border-width: ${bdwidth}px;
    border-color: ${bdcolor};
    border-radius: 4px;
    background-color: ${bgcolor};
    background-image: ${bggrad};
  }
  .container {
    width: calc(100% - 42px);
    height: calc(100% - 42px);
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: -10px;
  }

   /* Designed and coded by KasRoudra(https://github.com/KasRoudra) */

  .head {
    flex-basis: 10%;
    width: 95%;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 3% 2%;
    padding-top: 6%;
  }
  .title {
    font-family: "Inter", Helvetica, Arial, serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${hcolor};
  }
  .dict {
    padding-left: 2px;
    padding-right: 5px;
  }
  .body {
    display: flex;
    height: 100%;
    flex-basis: 30%;
    flex-flow: column wrap;
    justify-content: space-between;
  }
  .description {
    max-height: 42%;
    width: 100%;
    font-size: 1.1rem;
    overflow: hidden;
    line-height: 1.5;
    padding: 5px 10px;
    color: ${color};
  }
  .footer {
    flex-basis: 40%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2%;
  }
  .stats {
    flex-basis: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .stat {
    padding: 0 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1px;
    color: ${color};
  }
  .langs {
    flex-basis: 40%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-left: 3px;
    padding-top: 2px;
  }
  .lang {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 5px;
  }
  .langname {
    padding: 5px;
    color: ${color};
  }
  .octicon {
    fill: ${color};
  }
  .circle {
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }
  </style>
     
  <foreignObject x="21" y="21">
  <div xmlns="http://www.w3.org/1999/xhtml" class="main">
  <div class="container">
      <div class="head">
        <svg
          class="octicon dict"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="20"
          height="20"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M1 2.5A2.5 2.5 0 013.5 0h8.75a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V1.5h-8a1 1 0 00-1 1v6.708A2.492 2.492 0 013.5 9h3.25a.75.75 0 010 1.5H3.5a1 1 0 100 2h5.75a.75.75 0 010 1.5H3.5A2.5 2.5 0 011 11.5v-9zm13.23 7.79a.75.75 0 001.06-1.06l-2.505-2.505a.75.75 0 00-1.06 0L9.22 9.229a.75.75 0 001.06 1.061l1.225-1.224v6.184a.75.75 0 001.5 0V9.066l1.224 1.224z"
          ></path>
        </svg>
        <div class="title">${name}</div>
      </div>
      <div class="body">
        <div class="description">
          ${description}
        </div>
        <div class="footer">
          <div class="stats">
          ${
            starCount !== "None"
              ? `<div class="star stat">
              <svg
                class="octicon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                ></path>
              </svg>
              <div class="star-count count">${starCount}</div>
            </div>
            `
              : ""
          }
            ${
              forkCount !== "None"
                ? `<div class="fork stat">
              <svg
                class="octicon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="16"
                height="16"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                ></path>
              </svg>
              <div class="fork-count count">${forkCount}</div>
            </div>
            `
                : ""
            }
            ${
              watcherCount !== "None"
                ? `<div class="watch stat">
              <svg
                class="octicon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <div class="watch-count count">${watcherCount}</div>
            </div>
            `
                : ""
            }
            ${
              prCount !== "None"
                ? `<div class="pr stat">
              <svg
                class="octicon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                ></path>
              </svg>
              <div class="pr-count count">${prCount}</div>
            </div>
            `
                : ""
            }
            ${
              issueCount !== "None"
                ? `<div class="isssue stat">
              <svg
                class="octicon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="16"
                height="16"
              >
                <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                <path
                  fill-rule="evenodd"
                  d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                ></path>
              </svg>
              <div class="issue-count count">${issueCount}</div>
            </div>
            `
                : ""
            }
            ${
              commitCount !== "None"
                ? `<div class="commit stat">
              <svg
                class="octicon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
                ></path>
              </svg>
              <div class="commit-count count">${commitCount}</div>
            </div>
            `
                : ""
            }
            ${
              changeCount !== "None"
                ? `<div class="change stat">
              <svg
                class="octicon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.75 1.75a.75.75 0 00-1.5 0V5H4a.75.75 0 000 1.5h3.25v3.25a.75.75 0 001.5 0V6.5H12A.75.75 0 0012 5H8.75V1.75zM4 13a.75.75 0 000 1.5h8a.75.75 0 100-1.5H4z"
                ></path>
              </svg>
              <div class="change-count count">${changeCount}</div>
            </div>
            `
                : ""
            }
          </div>
          <div class="langs">
          ${
            languages.nodes[0]
              ? `<div class="lang">
              <div class="circle" style="background-color: ${languages.nodes[0].color}"></div>
              <div class="langname">${languages.nodes[0].name}</div>
            </div>`
              : ""
          }
          ${
            languages.nodes[1]
              ? `<div class="lang">
            <div class="circle" style="background-color: ${languages.nodes[1].color}"></div>
            <div class="langname">${languages.nodes[1].name}</div>
          </div>`
              : ""
          }
          ${
            languages.nodes[2]
              ? `<div class="lang">
            <div class="circle" style="background-color: ${languages.nodes[2].color}"></div>
            <div class="langname">${languages.nodes[2].name}</div>
          </div>`
              : ""
          }
          </div>
        </div>
      </div>
     </div>
    </div>
   </foreignObject>
</svg>
  `;
  else
    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <!-- Designed and coded by KasRoudra(https://github.com/KasRoudra) -->
    <style>
      svg {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
          sans-serif, Apple Color Emoji, Segoe UI Emoji;
        font-size: 14px;
        line-height: 21px;
      }
  
      foreignObject {
        width: calc(100% - 10px);
        height: calc(100% - 20px);
      }
      .body {
        width: calc(80% - 2px); /*Half of border-radius*/
        height: calc(80% - 2px);
        padding: 5%;
        border: 1px solid rgb(225, 228, 232);
        border-width: ${bdwidth}px;
        border-color: ${bdcolor};
        border-radius: 4px;
        background-color: ${bgcolor};
        background-image: ${bggrad};
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
        font-size: 1em;
        font-family: "Inter", Helvetica, Arial, serif;
        font-weight: 700;
        color: ${hcolor};
      }

      /* Designed and coded by KasRoudra(https://github.com/KasRoudra) */
  
      td {
        margin-bottom: 16px;
        margin-top: 8px;
        padding: 0.25em;
        font-size: 12px;
        line-height: 18px;
        color: ${color};
      }
  
      tr {
        transform: translateX(-200%);
        animation-duration: 2s;
        animation-name: slideLeft;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
      }
      tr:nth-child(even) {
        animation-name: slideRight;
      }
      .octicon {
        fill: ${color};
        margin-right: 1ch;
        vertical-align: top;
      }
  
      @keyframes slideIn {
        to {
          transform: translateX(0);
        }
      }
  
      @keyframes slideLeft {
        from {
          transform: translateX(-200%);
        }
        to {
          transform: translateX(0);
        }
      }
  
      @keyframes slideRight {
        from {
          transform: translateX(200%);
        }
        to {
          transform: translateX(0);
        }
      }
    </style>
        <foreignObject x="21" y="21">
          <div xmlns="http://www.w3.org/1999/xhtml" class="body">
            <table>
              <thead>
                <tr style="transform: translateX(0)">
                  <th colspan="2">${name}'s GitHub Statistics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <svg
                      class="octicon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="16"
                      height="16"
                      ><path
                        fill-rule="evenodd"
                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                      ></path></svg
                    >Stars
                  </td>
                  <td id="starCount">${starCount}</td>
                </tr>
  
                <tr style="animation-delay: 150ms">
                  <td>
                    <svg
                      class="octicon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="16"
                      height="16"
                      role="img"
                      ><path
                        fill-rule="evenodd"
                        d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      ></path></svg
                    >Forks
                  </td>
                  <td id="forkCount">${forkCount}</td>
                </tr>
  
                <tr style="animation-delay: 300ms">
                  <td>
                    <svg
                      class="octicon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      ><path
                        fill-rule="evenodd"
                        d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
                      ></path></svg
                    >Watchers
                  </td>
                  <td id="watcherCount">${watcherCount}</td>
                </tr>
  
                <tr style="animation-delay: 450ms">
                  <td>
                    <svg
                      class="octicon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      ><path
                        fill-rule="evenodd"
                        d="M1 2.5A2.5 2.5 0 013.5 0h8.75a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V1.5h-8a1 1 0 00-1 1v6.708A2.492 2.492 0 013.5 9h3.25a.75.75 0 010 1.5H3.5a1 1 0 100 2h5.75a.75.75 0 010 1.5H3.5A2.5 2.5 0 011 11.5v-9zm13.23 7.79a.75.75 0 001.06-1.06l-2.505-2.505a.75.75 0 00-1.06 0L9.22 9.229a.75.75 0 001.06 1.061l1.225-1.224v6.184a.75.75 0 001.5 0V9.066l1.224 1.224z"
                      ></path></svg
                    >Total Commits
                  </td>
                  <td id="commitCount">${commitCount}</td>
                </tr>
  
                <tr style="animation-delay: 600ms">
                  <td>
                    <svg
                      class="octicon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="16"
                      height="16"
                      ><path
                        fill-rule="evenodd"
                        d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                      ></path></svg
                    >Pull requests
                  </td>
                  <td id="prCount">${prCount}</td>
                </tr>
  
                <tr style="animation-delay: 750ms">
                  <td>
                    <svg
                      class="octicon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="16"
                      height="16"
                      ><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path
                      ><path
                        fill-rule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                      ></path></svg
                    >Issues
                  </td>
                  <td id="issueCount">${issueCount}</td>
                </tr>
  
                <tr style="animation-delay: 900ms">
                  <td>
                    <svg
                      class="octicon"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      ><path
                        fill-rule="evenodd"
                        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                      ></path></svg
                    >Lines of codes changed
                  </td>
                  <td id="changeCount">${changeCount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </foreignObject>
  </svg>
  
  `;
};

export default repoCard;
