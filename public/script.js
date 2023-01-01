$(document).ready(() => {
  const image = $("#image");

  let alloption = `<option value="" selected>Default</option>`;

  $.get("/themes", (data) => {
    for (let theme of data) {
      alloption += `<option value="${theme.value}">${theme.name}</option>`;
    }
    const getThemes = (id) => `<div class="mt-3 mb-3">
        <label for="theme" class="label">Choose a Theme</label>
        <select
          class="form-select"
          id="theme-${id}"
          aria-label="Choose a theme"
        >
        ${alloption}
        </select>
      </div>`;
    $("#theme-user").html(getThemes("user"));
    $("#theme-lang").html(getThemes("lang"));
    $("#theme-repo").html(getThemes("repo"));
  });

  $.get("/limit", (data) => $("#remaining").text(data.remaining));

  const getLayouts = (id) => `<div class="mt-3 mb-3">
              <label for="layout" class="label">Choose a Layout</label>
              <select
                class="form-select"
                id="layout-${id}"
                aria-label="Choose a layout"
              >
                <option value="" selected>Default</option>
                <option value="compact">Compact</option>
              </select>
            </div>`;
  $("#layout-user").html(getLayouts("user"));
  $("#layout-lang").html(getLayouts("lang"));
  $("#layout-repo").html(getLayouts("repo"));

  const getMeasures = (id) => `<div class="mt-3 mb-3">
              <input type="checkbox" name="checkbox" id="show-measure-box-${id}" />
              <label for="show-measure-box-${id}" class="show-measure-box"
                >Use custom width and height</label
              >
            </div>
            <div class="mt-3 mb-3" id="measure-box-${id}">
              <div class="row">
                <div class="col">
                  <label for="width-${id}" class="label">Width</label>
                  <input
                    type="number"
                    id="width-${id}"
                    class="form-control"
                    placeholder="400"
                  />
                </div>
                <div class="col">
                  <label for="height-${id}" class="label">Height</label>
                  <input
                    type="number"
                    id="height-${id}"
                    class="form-control"
                    placeholder="600"
                  />
                </div>
              </div>
            </div>`;

  $("#measure-user").html(getMeasures("user"));
  $("#measure-lang").html(getMeasures("lang"));
  $("#measure-repo").html(getMeasures("repo"));

  const getColor = (id) => `<div class="mt-3 mb-3">
              <input type="checkbox" name="checkbox" id="show-color-box-${id}" />
              <label for="show-color-box-${id}" class="show-color-box"
                >Use custom colors</label
              >
            </div>
            <div class="mt-3 mb-3" id="color-box-${id}">
              <div class="row">
                <div class="col">
                  <label for="color-${id}" class="label">Text Color</label>
                  <input
                    type="color"
                    id="color-${id}"
                    class="form-control"
                    placeholder="000"
                  />
                </div>
                <div class="col">
                  <label for="bgcolor-${id}" class="label">Background Color</label>
                  <input
                    type="color"
                    id="bgcolor-${id}"
                    class="form-control"
                    placeholder="fff"
                  />
                </div>
                <div class="col">
                  <label for="hcolor-${id}" class="label">Header Color</label>
                  <input
                    type="color"
                    id="hcolor-${id}"
                    class="form-control"
                    placeholder="ddd"
                  />
                </div>
              </div>
            </div>`;

  $("#color-user").html(getColor("user"));
  $("#color-lang").html(getColor("lang"));
  $("#color-repo").html(getColor("repo"));

  const getUserUrl = () => {
    let url;
    const username = $("#username").val();
    const theme = $("#theme-user :selected").val();
    const layout = $("#layout-user :selected").val();
    const color = $("#color-user").val().slice(1);
    const bgcolor = $("#bgcolor-user").val().slice(1);
    const hcolor = $("#hcolor-user").val().slice(1);
    if (username) url = `/user?user=${username}`;
    if (url) {
      if (theme) url += `&theme=${theme}`;
      if (layout) url += `&layout=${layout}`;
      if (color && color != "000000") url += `&color=${color}`;
      if (bgcolor && bgcolor != "000000") url += `&bgcolor=${bgcolor}`;
      if (hcolor && hcolor != "000000") url += `&hcolor=${hcolor}`;
      return url;
    }
  };

  const getLangUrl = () => {
    let url;
    const username = $("#username").val();
    const theme = $("#theme-lang :selected").val();
    const layout = $("#layout-lang :selected").val();
    const type = $("#type :selected").val();
    const sort = $("#sort").val();
    const width = $("#width-lang").val();
    const height = $("#height-lang").val();
    const color = $("#color-lang").val().slice(1);
    const bgcolor = $("#bgcolor-lang").val().slice(1);
    const hcolor = $("#hcolor-lang").val().slice(1);
    const minimum = $("#minimum").val();
    const max_lang = $("#max_lang").val();
    const exclude_lang = $("#exclude_lang-lang").val();
    const exclude_repo = $("#exclude_repo").val();
    if (username) url = `/lang?user=${username}`;
    if (url) {
      if (theme) url += `&theme=${theme}`;
      if (layout) url += `&layout=${layout}`;
      if (type) url += `&type=${type}`;
      if (sort) url += `&sort=${sort}`;
      if (width) url += `&width=${width}`;
      if (height) url += `&height=${height}`;
      if (color && color != "000000") url += `&color=${color}`;
      if (bgcolor && bgcolor != "000000") url += `&bgcolor=${bgcolor}`;
      if (hcolor && hcolor != "000000") url += `&hcolor=${hcolor}`;
      if (minimum) url += `&minimum=${minimum}`;
      if (max_lang) url += `&max_lang=${max_lang}`;
      if (exclude_lang) url += `&exclude_lang=${exclude_lang}`;
      if (exclude_repo) url += `&exclude_repo=${exclude_repo}`;
      return url;
    }
  };

  const getRepoUrl = () => {
    let url;
    const username = $("#username").val();
    const reponame = $("#reponame").val();
    const theme = $("#theme-repo :selected").val();
    const layout = $("#layout-repo :selected").val();
    const width = $("#width-repo").val();
    const height = $("#height-repo").val();
    const color = $("#color-repo").val().slice(1);
    const bgcolor = $("#bgcolor-repo").val().slice(1);
    const hcolor = $("#hcolor-repo").val().slice(1);
    const exclude_stat = $("#exclude_stat").val();
    const exclude_lang = $("#exclude_lang-repo").val();
    if (username && reponame) url = `/repo?user=${username}&repo=${reponame}`;
    if (url) {
      if (theme) url += `&theme=${theme}`;
      if (layout) url += `&layout=${layout}`;
      if (width) url += `&width=${width}`;
      if (height) url += `&height=${height}`;
      if (color && color != "000000") url += `&color=${color}`;
      if (color && bgcolor != "000000") url += `&bgcolor=${bgcolor}`;
      if (hcolor && hcolor != "000000") url += `&hcolor=${hcolor}`;
      if (exclude_lang) url += `&exclude_lang=${exclude_lang}`;
      if (exclude_stat) url += `&exclude_stat=${exclude_stat}`;
      return url;
    }
  };

  const getUrl = () => {
    let url;
    if ($("#card :selected").val() === "user-card") url = getUserUrl();
    if ($("#card :selected").val() === "lang-card") url = getLangUrl();
    if ($("#card :selected").val() === "repo-card") url = getRepoUrl();
    return url;
  };

  const copyToClipboard = (text) => {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
  };

  const setLimit = (selector, func) => {
    $(selector).click(() => {
      const url = func();
      if (url) image.attr("src", url);
      $.get("/limit", (data) => $("#remaining").text(data.remaining));
    });
  };

  setLimit("#button-user", getUserUrl);
  setLimit("#button-lang", getLangUrl);
  setLimit("#button-repo", getRepoUrl);

  $("#form").submit((e) => e.preventDefault());

  $("input").keyup((e) => (e.target.value = e.target.value.trim()));

  $("#button-html").click(() => {
    const url = getUrl();
    const baseURL = window.location.href.slice(0, -1);
    if (url) {
      copyToClipboard(
        `<a href="https://github.com/KasRoudra/github-stats-card" alt="github-stats-card"><img src="${baseURL}${url}"/></a>`
      );
    }
  });

  $("#button-md").click(() => {
    const url = getUrl();
    const baseURL = window.location.href.slice(0, -1);
    if (url) {
      copyToClipboard(
        `[![github-stats-card](${baseURL}${url})](https://github.com/KasRoudra/github-stats-card)`
      );
    }
  });

  $("#button-url").click(() => {
    const url = getUrl();
    if (url) {
      const win = window.open(url, "_blank");
      win.focus();
    }
  });

  $("#button-user").attr("disabled", true);
  $("#button-lang").attr("disabled", true);
  $("#button-repo").attr("disabled", true);
  $("#button-html").attr("disabled", true);
  $("#button-md").attr("disabled", true);
  $("#button-url").attr("disabled", true);

  $("#username").keyup(function (event) {
    if (!$("#username").val()) {
      $("#button-user").attr("disabled", true);
      $("#button-lang").attr("disabled", true);
      $("#button-repo").attr("disabled", true);
      $("#button-html").attr("disabled", true);
      $("#button-md").attr("disabled", true);
      $("#button-url").attr("disabled", true);
    } else {
      $("#button-user").attr("disabled", false);
      $("#button-lang").attr("disabled", false);
      if ($("#reponame").val()) $("#button-repo").attr("disabled", false);
      if ($("#card :selected").val() === "repo-card") {
        if ($("#reponame").val()) {
          $("#button-html").attr("disabled", false);
          $("#button-md").attr("disabled", false);
          $("#button-url").attr("disabled", false);
        }
      } else {
        $("#button-html").attr("disabled", false);
        $("#button-md").attr("disabled", false);
        $("#button-url").attr("disabled", false);
      }
    }
    const keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      if ($("#card :selected").val() === "user-card") $("#button-user").click();
      if ($("#card :selected").val() === "lang-card") $("#button-lang").click();
      if ($("#card :selected").val() === "repo-card") $("#button-repo").click();
    }
  });

  $("#reponame").keyup(function (event) {
    if (!$("#reponame").val()) {
      $("#button-repo").attr("disabled", true);
      $("#button-html").attr("disabled", true);
      $("#button-md").attr("disabled", true);
      $("#button-url").attr("disabled", true);
    } else {
      if ($("#username").val()) {
        $("#button-repo").attr("disabled", false);
        $("#button-html").attr("disabled", false);
        $("#button-md").attr("disabled", false);
        $("#button-url").attr("disabled", false);
      }
    }
  });

  $("#lang-card").hide();
  $("#repo-card").hide();
  $("#card").change(() => {
    if ($("#card :selected").val() === "user-card") {
      $("#user-card").show();
      $("#lang-card").hide();
      $("#repo-card").hide();
    } else if ($("#card :selected").val() === "lang-card") {
      $("#user-card").hide();
      $("#lang-card").show();
      $("#repo-card").hide();
    } else if ($("#card :selected").val() === "repo-card") {
      $("#user-card").hide();
      $("#lang-card").hide();
      $("#repo-card").show();
      if (!$("#reponame").val()) {
        $("#button-repo").attr("disabled", true);
        $("#button-html").attr("disabled", true);
        $("#button-md").attr("disabled", true);
        $("#button-url").attr("disabled", true);
      }
    } else {
      $("#user-card").hide();
      $("#lang-card").hide();
      $("#repo-card").hide();
    }
  });

  $("#typediv").hide();
  $("#layout-lang").change(() => {
    $("#layout-lang :selected").val() === "compact"
      ? $("#typediv").show()
      : $("#typediv").hide();
  });

  const hideShow = (div, id) => {
    $(`#${div}-box-${id}`).hide();
    $(`#show-${div}-box-${id}`).click(() => {
      $(`#show-${div}-box-${id}`).is(":checked")
        ? $(`#${div}-box-${id}`).show()
        : $(`#${div}-box-${id}`).hide();
    });
  };

  hideShow("measure", "user");
  hideShow("measure", "lang");
  hideShow("measure", "repo");

  hideShow("color", "user");
  hideShow("color", "lang");
  hideShow("color", "repo");
});
