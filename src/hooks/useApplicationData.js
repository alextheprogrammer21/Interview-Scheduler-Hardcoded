import React from "react";
const axios = require('axios').default;

export default function useApplicationData() {
 

  const [state, setState] = React.useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
    spots: 4
  });

  const setDay = day => setState({ ...state, day });

  let calenderDay = 'Monday';

  for (const element in state.days) {
    if (state.day === state.days[element].name) {
      calenderDay = element
    }
  }

  React.useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('http://localhost:8001/api/days')),        
      Promise.resolve(axios.get('http://localhost:8001/api/appointments')),
      Promise.resolve(axios.get('http://localhost:8001/api/interviewers')),
    ]).then((all) => {
      setState(prev => ({ days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  },[]);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`http://localhost:8001/api/appointments/${id}`, appointment)
    .then(() => {
      state.days[calenderDay].spots -= 1;
      setState({
        ...state,
        appointments
      });
    })
  }


  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    return axios.delete(`http://localhost:8001/api/appointments/${id}`, appointment)
    .then(() => {
      state.days[calenderDay].spots += 1;
    })
  }
  return { state, setDay, bookInterview, cancelInterview};
}