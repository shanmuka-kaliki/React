const App = () => {
    return(
        React.createElement("div",{}, "This text is comming from React")
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));