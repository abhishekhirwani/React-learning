import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummyName",
        location: "dummyLocation",
      },
    };
    console.log("constructor call");
  }
  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/abhishekhirwani");
    const data = await res.json();
    this.setState({
      userInfo: data,
    });

    // console.log("component did mount called", data);
  }
  componentWillUnmount() {
    // console.log("component will unmount called");
  }
  componentDidUpdate() {
    // console.log("component did update called");
  }
  render() {
    console.log("render call", this.state.userInfo);
    const { name, location } = this.state.userInfo;
    // const { count } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
      </div>
    );
  }
}

export default UserClass;
