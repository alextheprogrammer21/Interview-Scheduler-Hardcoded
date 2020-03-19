import React from "react";
import Button from "components/Button"
import InterviewerList from "components/InterviewerList"
export default function Form(props) {  

  const [name, setName] = React.useState(props.name || "");
  const [interviewer, setInterviewer] = React.useState(props.interviewer || null)

  const reset = function() {
    setName("");
    setInterviewer(null);
  }



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
      Test: {name}
      Interviewer: {interviewer ? interviewer.name: ""}
    </form>
    <InterviewerList 
      interviewers={props.interviewers} 
      value={interviewer}
      setInterviewer={setInterviewer} 
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={reset}>Cancel</Button>
      <Button confirm onClick={() => props.onSave(name, interviewer)}>Save</Button>
    </section>
  </section>
</main>
  )}