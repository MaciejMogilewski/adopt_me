const Pet = (props) => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement(
                'h2',
                {},
                props.name
            ),
            React.createElement(
                'h3',
                {},
                props.animal
            ),
            React.createElement(
                'h3',
                {},
                props.breed
            )
        ]
    )
}

const App = () => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement(
                'h1',
                {},
                'Adopt me!'
            ),
            React.createElement(Pet, {name: 'Luna', animal: 'dog', breed: 'Havanese'}),
            React.createElement(Pet, {name:'Pepper', animal: 'bird', breed: 'Cockatiel'})
        ]
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
