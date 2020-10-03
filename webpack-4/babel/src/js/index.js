import "../css/index.css";
import Search from "./search";
import render from "./render";

const id = prompt("Quien es ese Pokemos?");

Search(id)
  .then((data) => {
    render(data);
  })
  .catch(() => {
    console.log("No hubo pokemon");
  });

// console.log();
// import text from "./text";

// text();

// if (module.hot) {
//   module.hot.accept("./text.js", function () {
//     console.log("He recargado en caliente");
//     text();
//   });
// }
