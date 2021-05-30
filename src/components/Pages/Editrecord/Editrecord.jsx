import React from "react";
import { connect } from "react-redux";
import Layout from "../../Layout/Layout";
import { updateData } from "../../../Redux/actions/formaction";

class Editrecord extends React.Component {
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

  componentDidMount() {
    const { id } = this.props.match.params;
    const record =
      this.props.records && this.props.records.find((item) => item.id === id);
    console.log(record);
    this.setState({
      values: {
        nume: record.nume,
        prenume: record.prenume,
        meserie: record.meserie,
        salariu: record.salariu,
        data_angajare: record.data_angajare,
      },
    });
  }

  handleInputChange(e) {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });

    //console.log(this.state.values);
  }

  submitForm(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    this.props.formTransmited({ ...this.state.values, id });

    this.setState({
      values: {
        nume: "",
        prenume: "",
        meserie: "",
        salariu: "",
        data_angajare: "",
      },
    });
    this.props.history.push("/angajati");
  }
  render() {
    console.log(this.props);
    return (
      <Layout>
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
              <h5 className="text-center mt-2">Update Angajati</h5>
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
                  <button
                    type="submit"
                    className="btn  btn-info  mt-3 text-white"
                  >
                    Update Record
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    formTransmited: (payload) => dispatch(updateData(payload)),
  };
}

function mapStateToProps(state) {
  return {
    records: state.form.displayData,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Editrecord);
