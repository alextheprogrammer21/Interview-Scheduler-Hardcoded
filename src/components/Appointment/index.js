import "../Appointment/styles.scss"
import React from "react";
import Header from "components/Appointment/Header.js"
import Empty from "components/Appointment/Empty.js"
import Show from "components/Appointment/Show"
import Show2 from "components/Appointment/Show2"
import useVisualMode from "hooks/useVisualMode";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status"
import Confirm from "components/Appointment/Confirm"
import Error from "components/Appointment/Error"

export default function Appointment(props) {
  //-----------------------Variable and function declerations--------------------
  const {
    id,
    interviewersForDay,
    cancelInterview
  } = props;

  const [refresh, setRefresh] = React.useState(1);
  const [nameAH, setNameAH] = React.useState("Joe");

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const SHOW2 = "SHOW2";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM"
  const EDIT = "EDIT"
  const ERROR_SAVE = "ERROR_SAVE"
  const ERROR_DELETE = "ERROR_DELETE"
  const DELETING = "DELETING"

  function refreshPage() {
    window.location.reload(false);
  }

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
const interviewer = props.interview && props.interview.interviewer || [];

function save(name, interviewer) { //Function to save the form data to book the interview
  const interview = {
    student: name,
    interviewer
  };
  if(typeof interviewer == "number") {
  transition(SAVING);
  props.bookInterview(id, interview)  
  // transition(SHOW);
  .then(() => {transition(SHOW)})
    .catch(() => {
      setNameAH(name)
      transition(SHOW2)});
  // .catch(() => {transition(ERROR_SAVE, true)});
  } else {
    {transition(ERROR_SAVE, true)}
  }
}

function deleter() {
  transition(DELETING);
  cancelInterview(id)
  .then(() => {transition(EMPTY)})
  .catch(() => {transition(EMPTY)});
}
//-----------------------CSS Display-------------------------------
  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => {transition(CREATE)}} />}
      {mode === CREATE && <Form 
        onSave={save}
        value={props.id}
        interviewers={props.interviewers}
        onCancel={() => {back()}} 
        name={interviewer.student}
      />}
      
        {/* The different displays depending on what you do */}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewers={interviewer}
          onDelete={() => {transition(CONFIRM)}}
          onEdit={() => {{transition(CREATE)}}}
          />)}

{mode === SHOW2 && (
        <Show2
          student={nameAH}
          interviewers={interviewer}
          onDelete={() => {transition(CONFIRM)}}
          onEdit={() => {{transition(CREATE)}}}
          />)}

      {mode === SAVING && (<Status message={SAVING} />)}
      {mode === DELETING && (<Status message={DELETING} />)}
      {mode === CONFIRM && (<Confirm onConfirm={deleter} onCancel={() => {{back()}}} message={CONFIRM}/>)}
      {mode === EDIT && ( <Form
          interviewers={interviewersForDay}
          onCancel={() => back()}
          onSave={save}
          name={interviewer.student}
          interviewer={interviewer.id}
        />)}
      {mode === ERROR_SAVE && (<Error message={"ERROR SAVING"} onClose={() => back()} />)}
      {mode === ERROR_DELETE && (<Error message={"ERROR DELETING"} onClose={() => {transition(SHOW)}} />)}
    </article>
  )
}


