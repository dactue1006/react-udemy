import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component{
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) =>{
    const classname = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={classname}>
        <label>{label}</label>
        <input {...input}/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues)=> {
    this.props.onSubmit(formValues);
  }
  render() {
      return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} 
        className='ui form error'>
        <Field name="title"component={this.renderInput} label='Enter the title'/>
        <Field name="description" component={this.renderInput} label='Enter the description'/>
        <button type='submit' className='ui button success'>Submit</button>
      </form>
    )
  }
}

const validate = (formValues)=> {
  let error = {};
  if (!formValues.title) {
    error.title = 'You must enter a title'
  }
  if (!formValues.description) {
    error.description = 'You must enter a description'
  }
  return error;
}

export default reduxForm({
  form: "StreamForm",
  validate
})(StreamForm);

