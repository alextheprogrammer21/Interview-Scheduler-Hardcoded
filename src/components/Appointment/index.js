import "../Appointment/styles.scss"
import React from "react";
import Header from "components/Appointment/Header.js"
import Empty from "components/Appointment/Empty.js"
import Show from "components/Appointment/Show"
import useVisualMode from "hooks/useVisualMode";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status"
import Confirm from "components/Appointment/Confirm"
export default function Appointment(props) {

  
  const {
    id,
    time,
    interviewers,
    interviewersForDay,
    bookInterview,
    cancelInterview
  } = props;

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM"
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
const interviewer = props.interview && props.interview.interviewer || [];

function save(name, interviewer) {
  const interview = {
    student: name,
    interviewer
  };
  transition(SAVING);
  props.bookInterview(id, interview)  
  .then(() => {transition(SHOW)});
}

function deleter() {

  cancelInterview(id)
  .then(() => {transition(EMPTY)});
}

  return (
    <article className="appointment">
      <Header time={props.time}/>
      
      
      {mode === EMPTY && <Empty onAdd={() => {transition(CREATE)}} />}
      {mode === CREATE && <Form 
                    onSave={save}
      
      // onChange={(event) => setName(event.target.value)}
      value={props.id}
      interviewers={props.interviewers}
      onCancel={() => {back()}} 
      // onSave={transition(SHOW)}

      />}
      
      {mode === SHOW && (
        <Show
            student={props.interview.student}

          interviewers={interviewer}
          onDelete={() => {transition(CONFIRM)}}
           
          
          // onSave={save}
        />
      )}
      {mode === SAVING && (<Status message={SAVING} />)};
      {mode === CONFIRM && (<Confirm onConfirm={deleter} message={CONFIRM}/>)}
      {/* {mode === SAVING && <Status message={SAVING} />}
      {mode === DELETING && <Status message={DELETING} />}
      {mode === CONFIRM && (
        <Confirm
          message={"Are you sure you would like to delete?"}
          onCancel={back}
          onConfirm={destroy}
          appointmentId={id}
        />
      )}
      {mode === EDIT && (
        <Form
          interviewers={interviewersForDay}
          onCancel={() => back()}
          onSave={save}
          name={interview.student}
          interviewer={interview.interviewer.id}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error message={"ERROR SAVE"} onClose={() => back()} />
      )}
      {mode === ERROR_DELETE && (
        <Error message={"ERROR DELETE"} onClose={() => back()} />
      )} */}
    </article>
  );
}


