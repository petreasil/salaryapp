import React from "react";
import Layout from "../../Layout/Layout";
import Angajat from "../../Angajat/Angajat";
import { connect } from "react-redux";
import Filter from "../../Filter/Filter";

const Angajati = (props) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4">
          <Filter />
        </div>
        <div className="col-md-8">
          <div className="table-responsive-md mt-4">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nume</th>
                  <th scope="col">Prenume</th>
                  <th scope="col">Meserie</th>
                  <th scope="col">Salariu</th>
                  <th scope="col">Data Angajare</th>
                  <th scope="col">Actiuni</th>
                </tr>
              </thead>
              <tbody>
                {props.records.map((item, index) => (
                  <Angajat
                    key={index}
                    {...item}
                    /*id={item.id}
                    nume={item.nume}
                    salariu={item.salariu}
                    prenume={item.prenume}
                    meserie={item.meserie}
                    data_angajare={item.data_angajare}*/
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};
function mapStateToProps(state) {
  return {
    records: state.form.displayData,
  };
}

export default connect(mapStateToProps, null)(Angajati);
