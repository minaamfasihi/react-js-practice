import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

var config = {
  apiKey: "AIzaSyCxQjNJQw5ooh0SIrYeFMTbtA2-kP7q2ps",
  authDomain: "usurvey-e6509.firebaseapp.com",
  databaseURL: "https://usurvey-e6509.firebaseio.com",
  projectId: "usurvey-e6509",
  storageBucket: "usurvey-e6509.appspot.com",
  messagingSenderId: "784105271955"
};
firebase.initializeApp(config);

class Usurvey extends Component {
    nameSubmit() {
      var studentName = this.refs.name.value;
      this.setState({studentName: studentName}, function() {
        console.log(this.state);
      });
    }

    answerSelected(event) {
      var answers = this.state.answers;
      if (event.target.name === 'answer1') {
        answers.answer1 = event.target.value;
      } else if (event.target.name === 'answer2') {
        answers.answer2 = event.target.value;
      } else if (event.target.name === 'answer3') {
        answers.answer3 = event.target.value;
      }
      this.setState({answers: answers}, function() {
        console.log(this.state);
      });
    }

    questionSubmit() {
      firebase.database().ref('uSurvey/' + this.state.uuid).set({
        studentName: this.state.studentName,
        answers: this.state.answers
      });
      this.setState({isSubmitted: true});
    }

    constructor(props) {
      super(props);

      this.state = {
        uuid: uuid.v1(),
        studentName: '',
        answers: {
          answer1: '',
          answer2: '',
          answer3: ''
        },
        isSubmitted: false
      };

      this.nameSubmit = this.nameSubmit.bind(this);
      this.questionSubmit = this.questionSubmit.bind(this);
      this.answerSelected = this.answerSelected.bind(this);
    }

    render() {
      var studentName;
      var questions;

      if (this.state.studentName === "" && this.state.isSubmitted === false) {
        studentName = <div>
          <h1>Hey student, let us know your name</h1>
          <form onSubmit={this.nameSubmit}>
            <input className="namy" type="text" ref="name" placeholder="Enter your name" />
          </form>
        </div>;
        questions = ''
      } else if (this.state.studentName != '' && this.state.isSubmitted == false) {
        studentName = <h1>Welcome to USurvey, {this.state.studentName}</h1>;
        questions = <div>
            <h2>Here are some questions: </h2>
            <form onSubmit={this.questionSubmit}>
              <div className='card'>
                <label>What kind of courses you like the most?</label><br />
                <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} />Technology
                <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} />Design
                <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} />Marketing
              </div>
              <br/>
              <div className='card'>
                <label>you are a: </label><br/>
                <input type="radio" name="answer2" value="student" onChange={this.answerSelected} />Student
                <input type="radio" name="answer2" value="in-job" onChange={this.answerSelected} />In-Job
                <input type="radio" name="answer2" value="looking-job" onChange={this.answerSelected} />Looking for Job
              </div>
              <br/>
              <div className='card'>
                <label>Is online learning helpful: </label><br/>
                <input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />Yes
                <input type="radio" name="answer3" value="no" onChange={this.answerSelected} />No
                <input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />Maybe
              </div>
              <input className="feedback-button" type="submit" value="submit" />
            </form>
          </div>
      } else if (this.state.isSubmitted === true) {
        studentName = <h1>Thanks, {this.state.studentName}</h1>
      }
    return(
      <div>
        {studentName}
        --------------------
        {questions}
      </div>
    )
  }
}

export default Usurvey;
