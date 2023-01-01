# GitHub-Stats-Card



[![Author](https://img.shields.io/badge/Author-KasRoudra-purple?style=for-the-badge)](https://github.com/KasRoudra)
[![Opensource](https://img.shields.io/badge/Open%20Source-Yes-cyan?style=for-the-badge)](./LICENSE)
![JavaScript](https://img.shields.io/badge/Written%20In-JS-blue?style=for-the-badge)

<!--
![star-count](https://img.shields.io/github/stars/KasRoudra/github-stats-card?style=for-the-badge&color=orange)
![fork-count](https://img.shields.io/github/forks/KasRoudra/github-stats-card?color=cyan&style=for-the-badge&color=purple)
![watcher-count](https://img.shields.io/github/watchers/KasRoudra/github-stats-card?color=cyan&style=for-the-badge&color=purple)
![issue-count](https://img.shields.io/github/issues/KasRoudra/github-stats-card?color=red&style=for-the-badge)
![license](https://img.shields.io/github/license/KasRoudra/github-stats-card?style=for-the-badge&color=blue)
-->

## Documentation

- Visit this [website](https://kasroudra-stats-card.onrender.com)
- Enter your Github username, choose a card and click generate
- And boom! Your stats card is ready to be shown in your README

### Copy the following code and replace the username (kasroudra) with your one and then paste it in your profile's README.md

#### User Card

```
[![github-stats-card](https://kasroudra-stats-card.onrender.com/user?user=KasRoudra&layout=compact&theme=buefy)](https://github.com/KasRoudra/github-stats-card)
```

[![github-stats-card](https://kasroudra-stats-card.onrender.com/user?user=KasRoudra&layout=compact&theme=buefy)](https://github.com/KasRoudra/github-stats-card)

##### Language Card

```
[![github-stats-card](https://kasroudra-stats-card.onrender.com/lang?user=KasRoudra&layout=compact&type=donut&theme=gruvbox_light)](https://github.com/KasRoudra/github-stats-card)
```

[![github-stats-card](https://kasroudra-stats-card.onrender.com/lang?user=KasRoudra&layout=compact&type=donut&theme=gruvbox_light)](https://github.com/KasRoudra/github-stats-card)

##### Repository Card

```
[![github-stats-card](https://kasroudra-stats-card.onrender.com/repo?user=KasRoudra&repo=pyphisher&layout=compact&theme=vue)](https://github.com/KasRoudra/github-stats-card)
```

[![github-stats-card](https://kasroudra-stats-card.onrender.com/repo?user=KasRoudra&repo=pyphisher&layout=compact&theme=vue)](https://github.com/KasRoudra/github-stats-card)

#### Theme

Themes are available in all cards

Use query parameter `&theme=<themename>` to use your desired theme

Available themes:

- dark, radical, merko, gruvbox, gruvbox_light, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula, prussian, monokai, vue, vue-dark, shades-of-purple, nightowl, buefy, blue-green, algolia, great-gatsby, darcula, bear, solarized-dark, solarized-light, chartreuse-dark, nord, gotham, material-palenight, graywhite, vision-friendly-dark, ayu-mirage, midnight-purple, calm, flag-india, omni, react, jolly, maroongold, yeblu, blueberry, slateorange, kacho_ga, outrun, ocean_dark, city_lights, github_dark, discord_old_blurple, aura_dark, panda, noctis_minimus, cobalt2, swift, aura, apprentice, moltack, codeSTACKr, rose_pine

#### Common options

<table>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Default value</th>
<th>Other values</th>
<th>Example</th>
</tr>
<tr>
<td>color</td>
<td>Color of the card</td>
<td>434d58</td>
<td>&lt;hex-value&gt;</td>
<td>&color=red</td>
</tr>
<tr>
<td>bgcolor</td>
<td>Background color of the card</td>
<td>fffefe</td>
<td>&lt;hex-value&gt;</td>
<td>&bgcolor=red</td>
</tr>
<tr>
<td>hcolor</td>
<td>Color of the header</td>
<td>2f80ed</td>
<td>&lt;hex-value&gt;</td>
<td>&hcolor=red</td>
</tr>
<tr>
<td>bdcolor</td>
<td>Border Color of the card</td>
<td>#e6e6e6</td>
<td>&lt;hex-value&gt;</td>
<td>&bdcolor=yellow</td>
</tr>
<tr>
<td>bdwidth</td>
<td>Border Width of the card</td>
<td>1</td>
<td>&lt;number&gt;</td>
<td>&bdwidth=3</td>
</tr>
<tr>
<td>bggrad</td>
<td>Background gradient of the card</td>
<td>None</td>
<td>&lt;hex-value(s)&gt;</td>
<td>&bggrad=to%20right,red,yellow</td>
</tr>
<tr>
<td>layout</td>
<td>Layout of the card</td>
<td>default</td>
<td>default, compact</td>
<td>&layout=compact</td>
</tr>
<tr>
<td>width</td>
<td>Width of the card</td>
<td>400</td>
<td>&lt;number&gt;</td>
<td>&width=500</td>
</tr>
<tr>
<td>height</td>
<td>Height of the card</td>
<td>300</td>
<td>&lt;number&gt;</td>
<td>&height=400</td>
</tr>
<tr>
<td>scale</td>
<td>Area of card</td>
<td>1</td>
<td>&lt;number&gt;</td>
<td>&scale=0.5</td>
</tr>
</table>

#### Language Card Exclusive options

<table>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Default value</th>
<th>Other values</th>
<th>Example</th>
<tr>
<td>type</td>
<td>Type of the card</td>
<td>default</td>
<td>donut, piechart</td>
<td>&type=piechart</td>
</tr>
<tr>
<td>sort</td>
<td>Sort of the card</td>
<td>default</td>
<td>asc, desc</td>
<td>&sort=desc</td>
</tr>
<tr>
<td>minimum</td>
<td>Minimum Language percentage</td>
<td>0.2</td>
<td>&lt;number&gt;</td>
<td>&minimum=0.5</td>
</tr>
<tr>
<td>max_lang</td>
<td>Maximum Language count</td>
<td>None</td>
<td>&lt;number&gt;</td>
<td>&max_lang=10</td>
</tr>
<tr>
<td>exclude_lang</td>
<td>Exclude Language(s)</td>
<td>None</td>
<td>&lt;languageName(s)&gt;</td>
<td>&exclude_lang=CSS</td>
</tr>
<tr>
<td>exclude_repo</td>
<td>Exclude Repository</td>
<td>None</td>
<td>&lt;repoName(s)&gt;</td>
<td>&exclude_repo=pyphisher</td>
</tr>
</table>

#### Repository Card Exclusive options

<table>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Default value</th>
<th>Other values</th>
<th>Example</th>
</tr>
<tr>
<td>include_username</td>
<td>Including username in reponame</td>
<td>false</td>
<td>true</td>
<td>&include_username=true</td>
</tr>
<tr>
<td>hide_lang</td>
<td>Exclude Language(s)</td>
<td>None</td>
<td>&lt;languageName(s)&gt;</td>
<td>&hide_lang=CSS</td>
</tr>
<tr>
<td>hide_stat</td>
<td>Exclude a statistics</td>
<td>None</td>
<td>stargazers, forks, watchers, changes, commits</td>
<td>&hide_stat=stargazers</td>
</tr>
<tr>
<td>hide_zero</td>
<td>Hide zero values</td>
<td>false</td>
<td>true</td>
<td>&hide_zero=true</td>
</tr>
<tr>
<td>show_stat</td>
<td>Show a statistics even with hide_zero true</td>
<td>None</td>
<td>stargazers, forks, watchers, changes, commits</td>
<td>&show_stat=stargazers</td>
</tr>
</table>

### Local Test

```
git clone https://github.com/KasRoudra/github-stats-card
```

```
cd github-stats-card
```

```
npm i
```

```
npm start
```

## Credits

[Document icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/document)

Themes are colloected from an awesome open source [project](https://github.com/anuraghazra/github-readme-stats/) by [Anurag Hazra](https://github.com/anuraghazra/)

SVG is colloected from another fantastic open source [project](https://github.com/jstrieb/github-stats) by [jstrieb](https://github.com/jstrieb/)

### [~] Find Me on

- [![Github](https://img.shields.io/badge/Github-KasRoudra-green?style=for-the-badge&logo=github)](https://github.com/KasRoudra2)

- [![Gmail](https://img.shields.io/badge/Gmail-KasRoudra-green?style=for-the-badge&logo=gmail)](mailto:kasroudrakrd@gmail.com)

- [![Facebook](https://img.shields.io/badge/Facebook-KasRoudra-green?style=for-the-badge&logo=messenger)](https://facebook.com/KasRoudra)

- [![Messenger](https://img.shields.io/badge/Messenger-KasRoudra-green?style=for-the-badge&logo=messenger)](https://m.me/KasRoudra)
