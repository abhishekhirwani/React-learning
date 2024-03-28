import User from "../components/User";
import UserClass from "../components/UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h3>This is the about us page</h3>
      {/* <User name={"Abhishek function"} /> */}
      <UserClass name={"Abhishek class"} location={"Nagpur"} />
    </div>
  );
};

export default About;
