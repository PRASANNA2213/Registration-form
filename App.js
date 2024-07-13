import { useState } from "react";
import "./styles.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState("");
  const onChangeFirstName = (event) => {
    setFirstName(event?.target?.value);
  };
  const onChangeLastName = (event) => {
    setLastName(event?.target?.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event?.target?.value);
  };
  const onChangePassword = (event) => {
    setPassword(event?.target?.value);
  };
  const onChangeContact = (event) => {
    setContact(event?.target?.value);
  };
  const onChangeGender = (event) => {
    setGender(event?.target?.value);
  };

  const onSubmit = (e) => {
    console.log("Prevent default", e);
    alert("Successfully Submitted");
  };
  const onReset = (e) => {
    console.log("Clear default", e);
  };

  return (
    <div className="App main">
      <h2>Registration Form</h2>
      <form action="" onSubmit={onSubmit}>
        <label for="first">First Name:</label>
        <input
          value={firstName}
          type="text"
          id="first"
          name="first"
          required
          onChange={onChangeFirstName}
        />
        <label for="last">Last Name:</label>
        <input
          type="text"
          id="last"
          name="last"
          required
          onChange={onChangeLastName}
        />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={onChangeEmail}
        />
        <label for="mobile">Contact:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          maxlength="10"
          required
          onChange={onChangeContact}
        />
        <div>
          <label for="birth">Gender:</label>
          <center>
            <input type="radio" value="MALE" name="gender" /> Male
            <input type="radio" value="FEMALE" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
          </center>
        </div>
        <div>
          <h1> </h1>
        </div>
        <label for="birth">DOB:</label>{" "}
        <center>
          <input type="date" id="birth" name="birth" required />{" "}
        </center>
        <br />
        <br />
        <label for="qualification"> Qualification: </label>
        <select id="qualification" name="qualification" required>
          <option selected="true" style={{ display: "none" }}></option>
          <option value="a">B.E</option>
          <option value="b">M.E</option>
          <option value="c">B.Tech</option>
          <option value="d">M.Tech</option>
          <option value="e">MCA</option>
          <option value="f">MBA</option>
          <option value="g">Other</option>
        </select>
        <br />
        <br />
        <label for="Address">Address:</label>
        <input type="text" required />
        <label for="state">State:</label>
        <input type="text" required />
        <label for="pincode">Pincode:</label>
        <input type="text" required />
        <div>
          <div>
            <label for="hobby">Hobbies: </label>
            <input type="checkbox" name="hobby" value="photography" />
            Photography
            <br />
            <input type="checkbox" name="hobby" value="flim" />
            Flim Making
            <br />
            <input type="checkbox" name="hobby" value="Acting" />
            Acting
            <br />
            <input type="checkbox" name="hobby" value="singing" />
            Singing
            <br />
            <input type="checkbox" name="hobby" value="dancing" />
            Dancing
            <br />
            <input type="checkbox" name="hobby" value="drawing" />
            Drawing
          </div>
        </div>
        <div>
          <h1> </h1>
        </div>
        <button type="submit" onSubmit={onSubmit}>
          Submit
        </button>
        <button type="reset" onSubmit={onSubmit}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default App;
