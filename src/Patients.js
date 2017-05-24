import React, { Component } from 'react'

class Patients extends Component {
  constructor(props){
    super(props);
    this.state={
      patients:[],
      isLoaded:false
    }
    this.getPatients = this.getPatients.bind(this);
  }

  componentWillMount(){
    this.getPatients();
  }

  getPatients(){
    return fetch(`/api/patients`,{
       method: 'get',
       headers: {
         'Authorization': 'Basic '+btoa('medicalhall:Y%pw)AJNPMsgb*x~5nyJ8W+'),
         'Content-Type': 'application/x-www-form-urlencoded'
       }})
    .then(function(response){
      response.json().then(function(data) {
        this.setState({patients:data,isLoaded:true})
      }.bind(this))
    }.bind(this))
    .catch(function(error){
      console.log("error")
      return "[]";
    });
  };

  render(){

    if(this.state.isLoaded) {
      return(
        <div>
          <table>
            <tbody>
              {this.state.patients.map((patient, index) => (
                  <tr key={patient._id}><td key={patient._id}>{patient.name}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
    else {
      return(
        <div>Loading..</div>
      )
    }
  }

}

export default Patients
