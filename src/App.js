// import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import "./App.css";
import AddForm from "./component/form/AddForm";
import Title from "./component/title/Title";
import TaskList from "./component/tasklist/TaskList";

function App() {
  // state to store all the task lists

  return (
    <div className="wrapper">
      <Container>
        {/* {title comp} */}
        <Title />

        {/* {form comp} */}
        <AddForm />

        <hr />

        {/* {TaskList} */}
        <TaskList />
      </Container>
    </div>
  );
}

export default App;
