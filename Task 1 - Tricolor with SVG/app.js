const createSpoke = (i, x1, y1, x, y) => {
  const svgNS = "http://www.w3.org/2000/svg";
  const spoke = document.createElementNS(svgNS, "line");
  spoke.setAttributeNS(null, "id", i);
  spoke.setAttributeNS(null, "x1", x1);
  spoke.setAttributeNS(null, "y1", y1);
  spoke.setAttributeNS(null, "x2", x);
  spoke.setAttributeNS(null, "y2", y);

  document.getElementById("TricolorSVG").appendChild(spoke);
};

const drawSpokes = () => {
  let x1 = 275,
    y1 = 200,
    theta = 15,
    r = 49;
  for (let i = 0; i < 24; i++) {
    theta = (theta * i * Math.PI) / 180;
    x = x1 + r * Math.cos(theta);
    y = y1 + r * Math.sin(theta);
    createSpoke(i, x1, y1, x, y);
    theta = 15;
  }
};
