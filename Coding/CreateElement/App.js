const heading = React.createElement("h1",{
    id:'title',
},"Heading 1");
const heading2 = React.createElement("h2",{
    id:'title2',
},"Heading 2!!");
const heading3 = React.createElement("h3",{
    id:'title1',
},"Heading 3");
const heading4 = React.createElement("h3",{
    id:'title3',
},"Heading 4");
const container = React.createElement("div",{},[heading,heading2,heading3,heading4])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);