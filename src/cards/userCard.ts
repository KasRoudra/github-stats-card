const userCard = (
  name: string,
  bio: string,
  image: string,
  layout: string,
  width: string,
  height: string,
  scale: string,
  starCount: string,
  forkCount: string,
  watcherCount: string,
  commitCount: string,
  contRepoCount: string,
  followerCount: string,
  pullCount: string,
  issueCount: string,
  hcolor: string,
  color: string,
  bgcolor: string,
  bdcolor: string,
  bdwidth: string,
  bggrad: string,
  resize: boolean
) => {
  let titleFontSize = 1.5;
  let bioFontSize = 1;
  let newName = name;
  let newBio = bio;
  if (resize) {
    titleFontSize = 20 / name.length;
    bioFontSize = bio ? 115 / bio.length : 1;
  } else {
    newName = name.length > 16 ? name.slice(0, 16) + "..." : name;
    newBio = bio
      ? bio.length > 90
        ? bio.slice(0, 90) + "..."
        : bio
      : "No bio provided";
  }
  if (layout === "compact")
    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" id="card">
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
    
    #background {
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      fill: transparent;
      stroke: rgb(225, 228, 232);
      stroke-width: 0px;
    }
    
    foreignObject {
      width: calc(100% - 10px - 32px);
      height: calc(100% - 10px - 32px);
    }
    .main {
      width: ${width};
      height: ${height};
      border: 1px solid #e1e4e8;
      border-width: ${bdwidth}px;
      border-color: ${bdcolor};
      border-radius: 4px;
      background-color: ${bgcolor};
      background-image: ${bggrad};
    }
    .container {
      width: 320px;
      height: 220px;
      padding: 5%;
      padding-top: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .body {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 80%;
      justify-content: space-between;
    }
    .title {
      transform: translateX(4%);
      font-size: ${titleFontSize}em;
      font-weight: bold;
      color: ${color};
    }
    .bio {
      flex-basis: 40%;
      width: 96%;
      font-size: ${bioFontSize}em;
      margin: 5px 10px;
      color: ${color};
      box-shadow: ${
        bggrad=="none"
          ? `inset 0px 5px 10px ${bgcolor}`
          : "none"
      };
      overflow: hidden;
      /*max-height: 3.6em;
      line-height: 1.25em;*/
      ${
        !resize &&
        `
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
              line-clamp: 3; 
      -webkit-box-orient: vertical;
      -webkit-box-pack: end;
      `
      }
    }
    .stats {
      flex-basis: 20%;
      transform: translateX(-5px) translateY(5px);
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .stats1,
    .stats2,
    .stats3,
    .stats4 {
      display: flex;
      flex-direction: column;
    }

    /* Designed and coded by KasRoudra(https://github.com/KasRoudra) */
    .stat {
      padding: 2px 5px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .octicon {
        fill: ${color};
    }
    .count {
      padding: 2px;
      color: ${color};
    }
    .issue-count {
        transform: translateY(1px);
    }
    .image {
        padding-left: 4%;
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px solid blue;
    }
    </style>
    <g>
    <rect x="5" y="5" id="background" />
    <g>
       
    <foreignObject x="21" y="21" width="338" height="198">
    <div xmlns="http://www.w3.org/1999/xhtml" class="main">
    <div class="container">
      ${
        image
          ? `<div class="image">
         <img src="${image}" alt="avatar" />
      </div>`
          : ""
      }
      <div class="body">
        <div class="title">${newName}</div>
        <div class="bio">
          ${newBio}
        </div>
        <div class="stats">
          <div class="stats1">
            <div class="star stat">
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
            <div class="commit stat">
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
          </div>
          <div class="stats2">
            <div class="fork stat">
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
            <div class="pr stat">
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
              <div class="pr-count count">${pullCount}</div>
            </div>
          </div>
          <div class="stats3">
            <div class="watch stat">
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
            <div class="isssue stat">
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
          </div>
          <div class="stats4">
            <div class="follower stat">
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
                  d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                ></path>
              </svg>
              <div class="follower-count count">${followerCount}</div>
            </div>
            <div class="contrib-repo stat">
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
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                ></path>
              </svg>
              <div class="contrib-repo-count count">${contRepoCount}</div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
   </foreignObject>
  </g>
 </g>
</svg>`;
  else
    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" id="card">
    <!-- Designed and coded by KasRoudra(https://github.com/KasRoudra) -->
    <style>
      svg {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
          sans-serif, Apple Color Emoji, Segoe UI Emoji;
        font-size: 14px;
        line-height: 21px;
      }

      .card {
        transform: scale(${scale});
      }
  
      #background {
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        fill: transparent;
        stroke: rgb(225, 228, 232);
        stroke-width: 0px;
      }
      .body {
        width: ${width};
        height: ${height};
        padding: 5%;
        border: 1px solid rgb(225, 228, 232);
        border-width: ${bdwidth}px;
        border-color: ${bdcolor};
        border-radius: 4px;
        background-color: ${bgcolor};
        background-image: ${bggrad};
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
    <g>
      <rect x="5" y="5" id="background" />
      <g>
        <foreignObject x="21" y="21" width="318" height="168">
          <div xmlns="http://www.w3.org/1999/xhtml" class="body">
            <table>
              <thead>
                <tr style="transform: translateX(0)">
                  <th colspan="2" id="name">${name}'s GitHub Statistics</th>
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
  
                <tr style="animation-delay: 450ms">
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
                  <td id="watchersCount">${watcherCount}</td>
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
                      aria-hidden="true"
                      ><path
                        fill-rule="evenodd"
                        d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                      ></path></svg
                    >Followers
                  </td>
                  <td>${followerCount}</td>
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
                      ><path
                        fill-rule="evenodd"
                        d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                      ></path></svg
                    >Pull requests
                  </td>
                  <td id="pullCount">${pullCount}</td>
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
                      ><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path
                      ><path
                        fill-rule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                      ></path></svg
                    >Issues
                  </td>
                  <td id="issueCount">${issueCount}</td>
                </tr>
  
                <tr style="animation-delay: 1050ms">
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
                    >Repositories with contributions
                  </td>
                  <td id="contRepoCount">${contRepoCount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </foreignObject>
      </g>
    </g>
  </svg>
  `;
};

export default userCard;
