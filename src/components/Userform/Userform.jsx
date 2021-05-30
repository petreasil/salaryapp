import React from "react";
import { connect } from "react-redux";
import { submitData } from "../../Redux/actions/formaction";
import nextId from "react-id-generator";

class Userform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        nume: "",
        prenume: "",
        meserie: "",
        salariu: "",
        data_angajare: "",
      },
    };
  }

  handleInputChange(e) {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
        id: nextId(),
      },
    });

    //console.log(this.state.values);
  }

  submitForm(e) {
    e.preventDefault();
    this.props.formTransmited({ ...this.state.values });

    this.setState({
      values: {
        nume: "",
        prenume: "",
        meserie: "",
        salariu: "",
        data_angajare: "",
      },
    });
  }
  render() {
    return (
      <form
        className="mt-4 mb-4 border p-3"
        onSubmit={(e) => this.submitForm(e)}
      >
        <div className="form-group">
          <label htmlFor="name">Nume</label>
          <input
            type="text"
            name="nume"
            value={this.state.values.nume}
            onChange={(e) => this.handleInputChange(e)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prenume">Prenume</label>
          <input
            type="text"
            name="prenume"
            value={this.state.values.prenume}
            onChange={(e) => this.handleInputChange(e)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="meserie">Meserie</label>
          <input
            type="text"
            name="meserie"
            value={this.state.values.meserie}
            onChange={(e) => this.handleInputChange(e)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salariu">Salariu</label>
          <input
            type="number"
            name="salariu"
            min="0"
            value={this.state.values.salariu}
            onChange={(e) => this.handleInputChange(e)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Data angajare</label>
          <input
            type="date"
            name="data_angajare"
            value={this.state.values.data_angajare}
            onChange={(e) => this.handleInputChange(e)}
            className="form-control"
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn  btn-info  mt-3 text-white">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    formTransmited: (payload) => dispatch(submitData(payload)),
  };
}

export default connect(null, mapDispatchToProps)(Userform);
