const createBar = () => {
  let data = [];
  for (let i = 0; i < 10; i++) {
    data.push(Math.floor(Math.random() * 30));
  }
  //   let data = [2, 4, 6, 8, 10, 3, 22, 55];
  const div = d3
    .create("div")
    .style("font", "10px sans-serif")
    .style("text-align", "right")
    .style("color", "white");

  div
    .selectAll("div")
    .data(data)
    .join("div")
    .style("background", "steelblue")
    .style("padding", "3px")
    .style("margin", "1px")
    .style("width", d => `${x(d)}px`)
    .text(d => d);

  console.log(div.node());

  return div.node();
};

let inject = document.querySelector("div");

inject.appendChild(createBar());

// createBar();
