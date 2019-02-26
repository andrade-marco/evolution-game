//Personal Form Component
// This component holds the input fields for the user to submit personal
// information

//Modules
import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Dropdown, Button } from "semantic-ui-react";

//Internal dependencies
import LabeledInput from "./LabeledInput";
import { GENDER_OPTIONS } from "../constants";

//Component
const PersonalForm = ({
  firstName,
  lastName,
  profession,
  gender,
  age,
  income,
  onChangeInput,
  onSelectChange,
  clearForm,
  submitForm,
  saving
}) => {
  return (
    <Form className="form-container">
      <div className="form-message">
        Please enter your personal information
      </div>
      <div className="horizontal-input-group">
        <LabeledInput label="First Name" horizontal>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={onChangeInput}
            fluid/>
        </LabeledInput>
        <LabeledInput label="Last Name" horizontal>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={onChangeInput}
            fluid/>
        </LabeledInput>
      </div>
      <div className="horizontal-input-group">
        <LabeledInput label="Gender">
          <Dropdown
            id="gender"
            placeholder='Select a gender'
            value={gender}
            onChange={onSelectChange}
            options={GENDER_OPTIONS}
            fluid
            selection/>
        </LabeledInput>
        <LabeledInput label="Age">
          <Input
            id="age"
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={onChangeInput}
            fluid/>
        </LabeledInput>
      </div>
      <LabeledInput label="Profession">
        <Input
          id="profession"
          type="text"
          placeholder="Enter your profession"
          value={profession}
          onChange={onChangeInput}
          fluid/>
      </LabeledInput>
      <LabeledInput label="Total income">
        <Input
          id="income"
          type="number"
          placeholder="Enter your income"
          value={income}
          onChange={onChangeInput}
          fluid/>
      </LabeledInput>
      <div className="horizontal-input-group form-controls">
        <Button onClick={clearForm} fluid>
          Clear
        </Button>
        <Button
          onClick={submitForm}
          primary
          fluid
          loading={saving}>
          Save
        </Button>
      </div>
    </Form>
  );
}

//Prop validation
PersonalForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  gender: PropTypes.string,
  age: PropTypes.number,
  profession: PropTypes.string,
  income: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired
}

//Default props
PersonalForm.defaultProps = {
  onChangeInput: () => {},
  onSelectChange: () => {},
  clearForm: () => {},
  submitForm: () => {},
  saving: false
}

//Export
export default PersonalForm;
