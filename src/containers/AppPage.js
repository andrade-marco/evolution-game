//App"s Page

//Modules
import React, { Component } from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";
import "../index.css";

//Internal dependencies
import { saveFormData } from "../store/actions";
import PersonalForm from "../components/PersonalForm";
import BusinessForm from "../components/BusinessForm";

//Container
class AppPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "business",
      saving: false,
      success: false,

      //Personal data
      firstName: "",
      lastName: "",
      profession: "",
      gender: "",
      age: "",
      income: "",

      //Business data
      companyName: "",
      location: "",
      industry: "",
      revenue: "",
      employeeCount: ""
    }
  }

  //Helpers
  getFormData = () => {
    if (this.state.form === "personal") {
      const {
        firstName,
        lastName,
        profession,
        gender,
        age,
        income
      } = this.state;

      return { firstName, lastName, profession, gender, age, income };
    }

    const {
      companyName,
      location,
      industry,
      revenue,
      employeeCount
    } = this.state;

    return { companyName, location, industry, revenue, employeeCount };
  }

  getClearState = () => {
    let update = {};
    update.success = false;
    update.firstName = "";
    update.lastName = "";
    update.profession = "";
    update.gender = "";
    update.age = "";
    update.income = "";
    update.companyName = "";
    update.location = "";
    update.industry = "";
    update.revenue = "";
    update.employeeCount = "";

    return update;
  }

  resolveForm = () => {
    const { form, saving } = this.state;
    const formData = this.getFormData();
    const FormComponent = form === "personal" ? PersonalForm : BusinessForm;

    return (
      <FormComponent
        { ...formData }
        onChangeInput={this.handleInputChange}
        onSelectChange={this.handleSelectChange}
        clearForm={this.handleFormClear}
        submitForm={this.handleFormSubmit}
        saving={saving}/>
    );
  }

  resolveDataSaving = () => {
    const newState = this.getClearState();
    newState.saving = false;
    newState.success = true;
    this.setState(newState);
  }

  //Handlers
  handleFormSelection = event => {
    const newState = this.getClearState();
    newState.form = event.target.id;
    this.setState(newState);
  }

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSelectChange = (event, { id, value }) => {
    this.setState({ [id]: value });
  }

  handleFormClear = () => {
    const newState = this.getClearState();
    this.setState(newState);
  }

  handleFormSubmit = () => {
    const formData = this.getFormData();
    this.setState({ saving: true, success: false });
    this.props.saveFormData(
      this.state.form,
      formData,
      this.resolveDataSaving
    );
  }

  render () {
    const { form, success } = this.state;

    return (
      <div className="page-container">
        <div className="selection-container">
          <div
            id="personal"
            className={form === "personal" ? "form-tab-active" : "form-tab"}
            onClick={this.handleFormSelection}>
            Personal
          </div>
          <div
            id="business"
            className={form === "business" ? "form-tab-active" : "form-tab"}
            onClick={this.handleFormSelection}>
            Business
          </div>
        </div>
        <div className="form-wrapper">
          {this.resolveForm()}
          {success &&
            <Message positive>
              <Message.Header>
                Thank you! Your data was successfully saved.
              </Message.Header>
            </Message>}
        </div>
      </div>
    );
  }
}

//Prop validation
AppPage.propTypes = {
  saveFormData: PropTypes.func.isRequired
}

//Default props
BusinessForm.defaultProps = {
  saveFormData: () => {}
}

//Maps state to props
const mapStateTopProps = state => {
  const { personalData, businessData } = state;
  console.log(personalData, businessData);
  return { personalData, businessData };
}

//Export
export default connect(mapStateTopProps, { saveFormData })(AppPage);
