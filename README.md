## Developer Notes

use this syntax when there is calculation happening in a setState as shown below

```javascript
handleClick = (props) => {
    this.setState(
        (prevState, prevProps) => {
            return { myNumber: prevState.myNumber + prevProps.increment };
        },
        () => console.log(this.state.myNumber)
    );
};
```

most basic fetch example

```javascript
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }
```
