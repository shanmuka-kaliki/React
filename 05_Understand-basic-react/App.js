const heading = React.createElement("h1", {id:"heading"}, "Hello World with React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// lets console log heading 
console.log(heading)

// This is the object we are getting as output
// {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "id": "heading",
//         "children": "Hello World with React"
//     },
//     "_owner": null,
//     "_store": {}
// }
// 
// whatever the element we are creating is passing to DOM as an object.
// In that object there is property called props its value is object containing all attibutes and children
// This means createElement gives a object to DOM to render all these using render() method.
// React.createElement ==> Object ===> render() ===> DOMElement. 
