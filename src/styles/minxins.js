export const extensions = (property, value) => {
  return `
	-webkit-${property}: ${value};
  -moz-${property}:${value};
  -ms-${property}:${value};
  ${property} : ${value};
	`;
};
