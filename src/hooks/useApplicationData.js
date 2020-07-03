import React from "react";
const axios = require('axios').default;

export default function useApplicationData() {
 

  const [state, setState] = React.useState({
    day: ['Monday'],
    days: [{"id":1,"name":"Monday","appointments":[1,2,3,4,5],"interviewers":[2,3,7,8,10],"spots":4},{"id":2,"name":"Tuesday","appointments":[6,7,8,9,10],"interviewers":[3,4,8,9,10],"spots":3},{"id":3,"name":"Wednesday","appointments":[11,12,13,14,15],"interviewers":[1,2,3,4,6],"spots":2},{"id":4,"name":"Thursday","appointments":[16,17,18,19,20],"interviewers":[1,2,3,6,9],"spots":4},{"id":5,"name":"Friday","appointments":[21,22,23,24,25],"interviewers":[2,3,6,8,9],"spots":2}],
    appointments: {"1":{"id":1,"time":"12pm","interview":null},"2":{"id":2,"time":"1pm","interview":{"student":"Archie Cohen","interviewer":8}},"3":{"id":3,"time":"2pm","interview":null},"4":{"id":4,"time":"3pm","interview":null},"5":{"id":5,"time":"4pm","interview":null},"6":{"id":6,"time":"12pm","interview":{"student":"Chad Takahashi","interviewer":9}},"7":{"id":7,"time":"1pm","interview":null},"8":{"id":8,"time":"2pm","interview":{"student":"Jamal Jordan","interviewer":10}},"9":{"id":9,"time":"3pm","interview":null},"10":{"id":10,"time":"4pm","interview":null},"11":{"id":11,"time":"12pm","interview":{"student":"Leopold Silvers","interviewer":4}},"12":{"id":12,"time":"1pm","interview":{"student":"Liam Martinez","interviewer":2}},"13":{"id":13,"time":"2pm","interview":null},"14":{"id":14,"time":"3pm","interview":{"student":"Lydia Miller-Jones","interviewer":1}},"15":{"id":15,"time":"4pm","interview":null},"16":{"id":16,"time":"12pm","interview":{"student":"Maria Boucher","interviewer":6}},"17":{"id":17,"time":"1pm","interview":null},"18":{"id":18,"time":"2pm","interview":null},"19":{"id":19,"time":"3pm","interview":null},"20":{"id":20,"time":"4pm","interview":null},"21":{"id":21,"time":"12pm","interview":{"student":"Michael Chan-Montoya","interviewer":3}},"22":{"id":22,"time":"1pm","interview":null},"23":{"id":23,"time":"2pm","interview":{"student":"Richard Wong","interviewer":8}},"24":{"id":24,"time":"3pm","interview":{"student":"Yuko Smith","interviewer":8}},"25":{"id":25,"time":"4pm","interview":null}},
    interviewers: {"1":{"id":1,"name":"Sylvia Palmer","avatar":"https://i.imgur.com/LpaY82x.png"},"2":{"id":2,"name":"Tori Malcolm","avatar":"https://i.imgur.com/Nmx0Qxo.png"},"3":{"id":3,"name":"Mildred Nazir","avatar":"https://i.imgur.com/T2WwVfS.png"},"4":{"id":4,"name":"Cohana Roy","avatar":"https://i.imgur.com/FK8V841.jpg"},"5":{"id":5,"name":"Sven Jones","avatar":"https://i.imgur.com/twYrpay.jpg"},"6":{"id":6,"name":"Susan Reynolds","avatar":"https://i.imgur.com/TdOAdde.jpg"},"7":{"id":7,"name":"Alec Quon","avatar":"https://i.imgur.com/3tVgsra.jpg"},"8":{"id":8,"name":"Viktor Jain","avatar":"https://i.imgur.com/iHq8K8Z.jpg"},"9":{"id":9,"name":"Lindsay Chu","avatar":"https://i.imgur.com/nPywAp1.jpg"},"10":{"id":10,"name":"Samantha Stanic","avatar":"https://i.imgur.com/okB9WKC.jpg"}},
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

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    state.days[calenderDay].spots -= 1;

    let time = state.appointments[id].time
    state.appointments[id] = {"id":id,"time": time,"interview":interview};
    setState(state);

    return axios.put(`/api/appointments/${id}`, appointment)
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

    state.days[calenderDay].spots += 1;
    let time = state.appointments[id].time

    state.appointments[id] = {"id": id,"time": time,"interview":null}
    return axios.delete(`/api/appointments/${id}`, appointment)
    .then(() => {
      state.days[calenderDay].spots += 1;
    })
  }
  return { state, setDay, bookInterview, cancelInterview};
}