import React, { useState, useEffect } from "react";
const axios = require('axios').default;



export default function useApplicationData() {
  const useAppData = {
    state: "e",
    setDay: "e",
    bookInterview: "e",
    cancelInterview: "e"
  }

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
    spotsRem: 5
  });

  const setDay = day => setState({ ...state, day });

  let calenderDay = 'Monday';

  for (const element in state.days) {
    if (state.day === state.days[element].name) {
      calenderDay = element
    }
  }

  useEffect(() => {
    
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


    console.log("The values", id, interview);
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

      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
    })
  }

  return { state, setDay, bookInterview, cancelInterview};
}


//So you need to reassign the value in state.days to contain the right number of spots. 
//When you add a day, then you lower the spots by one, when you delete a day, then you increase the spots by one