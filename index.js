const CREATE = "CREATE";
const REMOVE = "REMOVE";
const REPLACE = "REPLACE";
const UPDATE = "UPDATE";
const SET_PROP = "SET_PROP";
const REMOVE_PROP = "REMOVE PROP";

//// DIFF

function changed(node1, node2) {}

function diffProps(newNode, oldNode) {}

function diffChildren(newNode, oldNode) {}

function diff(newNode, oldNode) {
  //@
}

//// PATCH

function createElement(node) {
  //@
}

function setProp(target, name, value) {
  //@
}

function setProps(target, props) {}

function removeProp(target, name, value) {
  //@
}

function patchProps(parent, patches) {}

function patch(parent, patches, index = 0) {
  //@
}

function flatten(arr) {
  return [].concat.apply([], arr);
}

function h(type, props, ...children) {
  props = props || {};
  return { type, props, children: flatten(children) };
}

const ourJSX = (
  <ul className="test" id="listing">
    <li className="one">Test 1</li>
    <li className="two">Test 2</li>
    <li className="three">Test 3</li>
    <li className="four">Test 4</li>
  </ul>
);

console.log(ourJSX);

function tick(el, count) {}

function render(el) {}
