const Pizza = (props) => {
    return(

    React.createElement("div", {}, [
        React.createElement("h1", {id: "phani"}, props.name),
        React.createElement("p", {}, props.description),
    ])) 
}

const App = () => {
    return (
        React.createElement(
            "div", 
            {}, 
            [
                React.createElement("h1", {}, "This is text in react component"),
                React.createElement(Pizza, {
                    name: "the pepperoni pizza",
                    description: "some dope pizza vo"
                }),
                React.createElement(Pizza, {
                    name: "The Hawaiian Pizza",
      description: "Sliced Ham, Pineapple, Mozzarella Cheese",
                }),
                React.createElement(Pizza,{
                    name: "The Big Meat Pizza",
      description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
                }),
            ]
        )
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));