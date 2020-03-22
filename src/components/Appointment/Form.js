import React from "react";
import Button from "components/Button"
import InterviewerList from "components/InterviewerList"
export default function Form(props) {  

  const [name, setName] = React.useState(props.name || "");
  const [interviewer, setInterviewer] = React.useState(props.interviewers || null)

  const reset = function() {
    setName("");
    setInterviewer(null);
  }

  const cancel = function() {
    reset();
    props.onCancel();
  }
  const createAppointmentSubmission = (event) => {
    event.preventDefault();
    props.onSave(name, interviewer);
  }
// setInterviewer([]);

  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form onSubmit={event => event.preventDefault()} autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        onChange={(event) => setName(event.target.value)}
      />
    </form>
    <InterviewerList 
      interviewers={props.interviewers} 
      value={props.value}
      // onChange={} 
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={createAppointmentSubmission}>Save</Button>
    </section>
  </section>
</main>
  )}