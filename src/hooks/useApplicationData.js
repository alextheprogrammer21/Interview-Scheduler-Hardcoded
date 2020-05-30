import React from "react";
const axios = require('axios').default;

export default function useApplicationData() {
 

  const [state, setState] = React.useState({
    day: "Monday",
    days: [{
      "id": 1,
      "name": "Monday",
      "appointments": [1, 2],
      "interviewers": [1, 2],
      "spots": 0
    }, {
      "id": 2,
      "name": "Tuesday",
      "appointments": [2, 2],
      "interviewers": [2, 2],
      "spots": 4
    }],
    appointments: { "1": {
      "id": 1,
      "time": "12pm",
      "interview": {
        "student": "Lydia Miller-Jones",
        "interviewer": 1
      }
    },
    "2": {
      "id": 2,
      "time": "1pm",
      "interview": {
        "student": "Archie Cohen",
        "interviewer": 2
      }
    }},
    interviewers: { "1": {
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      "id": 2,
      "name": "Tori Malcolm",
      "avatar": "https://i.imgur.com/Nmx0Qxo.png"
    }},
    spots: 4
  });

  const setDay = day => setState({ ...state, day });

  let calenderDay = 'Monday';

  for (const element in state.days) {
    if (state.day === state.days[element].name) {
      calenderDay = element
    }
  }

  // React.useEffect(() => {
  //   Promise.all([
  //     Promise.resolve(axios.get('/api/days')),        
  //     Promise.resolve(axios.get('/api/appointments')),
  //     Promise.resolve(axios.get('/api/interviewers')),
  //   ]).then((all) => {
  //     setState(prev => ({ days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
  //   });
  // },[]);

  // function bookInterview(id, interview) {
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   };

  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };

  //   return axios.put(`/api/appointments/${id}`, appointment)
  //   .then(() => {
  //     state.days[calenderDay].spots -= 1;
  //     setState({
  //       ...state,
  //       appointments
  //     });
  //   })
  // }


  // function cancelInterview(id) {
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: null
  //   };
  //   return axios.delete(`/api/appointments/${id}`, appointment)
  //   .then(() => {
  //     state.days[calenderDay].spots += 1;
  //   })
  // }
  return { state, setDay};
}