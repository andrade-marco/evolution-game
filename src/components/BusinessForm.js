//Business Form Component
//This component contains the fields to allow users to submit business
// information

//Modules
import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Dropdown, Button } from "semantic-ui-react";

//Internal dependencies
import LabeledInput from "./LabeledInput";
import { INDUSTRY_OPTIONS } from "../constants";

//Component
const BusinessForm = ({
  companyName,
  location,
  industry,
  revenue,
  employeeCount,
  onChangeInput,
  onSelectChange,
  clearForm,
  submitForm,
  saving
}) => {
  return (
    <Form className="form-container">
      <div className="form-message">
        Please enter your business information
      </div>
      <LabeledInput label="Company name" horizontal>
        <Input
          id="companyName"
          placeholder="Enter your company's name"
          value={companyName}
          onChange={onChangeInput}
          fluid/>
      </LabeledInput>
      <LabeledInput label="Location" horizontal>
        <Input
          id="location"
          placeholder="Enter your company's location"
          value={location}
          onChange={onChangeInput}
          fluid/>
      </LabeledInput>
      <LabeledInput label="Industry">
        <Dropdown
          id="industry"
          placeholder='Select an industry'
          value={industry}
          onChange={onSelectChange}
          options={INDUSTRY_OPTIONS}
          fluid
          selection/>
      </LabeledInput>
      <div className="horizontal-input-group">
        <LabeledInput label="Total Revenue" horizontal>
          <Input
            id="revenue"
            type="number"
            placeholder="Enter your company's total revenue"
            value={revenue}
            onChange={onChangeInput}
            fluid/>
        </LabeledInput>
        <LabeledInput label="Number of Employees" horizontal>
          <Input
            id="employeeCount"
            type="number"
            placeholder="Enter the employee count"
            value={employeeCount}
            onChange={onChangeInput}
            fluid/>
        </LabeledInput>
      </div>
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

//Export
export default BusinessForm;
