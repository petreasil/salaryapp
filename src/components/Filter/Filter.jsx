import React from "react";
import { connect } from "react-redux";
import {
  filterData,
  priceFilter,
  rangeFilter,
  bigFilter,
} from "../../Redux/actions/formaction";

const Filter = (props) => {
  return (
    <div className="custom-control custom-checkbox d-flex flex-column justify-content-around border p-3 mt-4">
      <h6 className="p-2">Sorteaza dupa:</h6>
      <select
        className="form-control form-control-sm"
        onChange={(e) => props.sortData(e)}
      >
        <option value={props.defaultValue}>Sort By...</option>
        <option value="nume">Nume--asc</option>
        <option value="salariu">Salariu--asc</option>
      </select>
      <h6 className="p-2 mt-2">Filtreaza dupa pret:</h6>
      <div className="d-flex justify-content-between align-items-center align-content-center p-3">
        <input
          type="checkbox"
          value="<2500"
          className="custom-control-input"
          onChange={(e) => props.filterPrice(e)}
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          {"<"}2500
        </label>
        <input
          type="checkbox"
          value="2500 si 4000"
          className="custom-control-input"
          onChange={(e) => props.rangePrice(e)}
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          intre 2500 si 4000
        </label>
        <input
          type="checkbox"
          value=">4000"
          className="custom-control-input"
          onChange={(e) => props.bigPrice(e)}
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          {">"}4000
        </label>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    defaultValue: state.form.defaultValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sortData: (e) => dispatch(filterData({ value: e.target.value })),
    filterPrice: (e) =>
      dispatch(
        priceFilter({ value: e.target.checked, value2: e.target.value })
      ),
    rangePrice: (e) =>
      dispatch(
        rangeFilter({ value: e.target.checked, value2: e.target.value })
      ),
    bigPrice: (e) =>
      dispatch(bigFilter({ value: e.target.checked, value2: e.target.value })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
