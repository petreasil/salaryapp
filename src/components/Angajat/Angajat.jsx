import React from "react";
import { connect } from "react-redux";
import { deleteData } from "../../Redux/actions/formaction";
import { Link } from "react-router-dom";

const Angajat = (props) => {
  console.log(props);

  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.nume}</td>
      <td>{props.prenume}</td>
      <td>{props.meserie}</td>
      <td>{props.salariu}</td>
      <td>{props.data_angajare}</td>
      <td>
        <Link to={`/angajati/edit/${props.id}`} style={{ color: "green" }}>
          <i className="bi bi-pencil-fill p-1"></i>
        </Link>
        <i
          className="bi bi-trash-fill p-1"
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => props.deleteitem({ id: props.id })}
        ></i>
      </td>
    </tr>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    deleteitem: (payload) => dispatch(deleteData(payload)),
  };
}
export default connect(null, mapDispatchToProps)(Angajat);
