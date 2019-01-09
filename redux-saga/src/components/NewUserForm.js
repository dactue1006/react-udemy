import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class NewUserForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
  }
  handleSubmit = (event)=> {
    event.preventDefault();
    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
    this.setState({
      firstName: '',
      lastName: ''
    })
  }

  onChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  onChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>
            First name
          </Label>
          <Input required placeholder='First name' onChange={this.onChangeFirstName} value={this.state.firstName}/>
        </FormGroup>
        <FormGroup>
          <Label>
            Last name
          </Label>
          <Input required placeholder='Last name' onChange={this.onChangeLastName} value={this.state.lastName}/>
        </FormGroup>
        <FormGroup>
          <Button block outline color='primary'>
            Create
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default NewUserForm;