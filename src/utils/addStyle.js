function addStyle(styleString) {
  document?.querySelectorAll("#colors")?.forEach((element) => {
    element.remove();
  });
  const style = document.createElement("style");
  style.textContent = styleString;
  style.id = "colors";
  document.head.append(style);
}

export default addStyle;
