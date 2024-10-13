export function createMarkup(name, parent, text= "", attributes= {}) {
const markup = document.createElement(name);
markup.textContent = text;
parent.appendChild(markup);
for(key in attributes) {
markup.setAttribute(key, attributes[key]);
};
return markup;
}