import React, { Fragment } from 'react';

class Mainbody extends React.Component {
  state = {
    valuePi: 0,
    valueSun: 0
  }

  componentWillMount () {
    fetch("http://localhost:3080/get-pi")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            valuePi: result.valuePi
          });
        },
      )

    fetch("http://localhost:3080/get-sun")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            valueSun: result.valueSun
          });
        },
      )
  }

  render () {
    return(
      <Fragment>
        <h1>Naluri Space Project</h1>
        <p className="mb-0">Value of Pi: {this.state.valuePi}</p>
        <p className="mb-0">Circumference of the sun: {this.state.valueSun} km</p>
      </Fragment>
    )
  }
}

export default Mainbody;