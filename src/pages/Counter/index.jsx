import React from "react";
import {
  decrease,
  increase,
  reset,
  setCount,
} from "../../redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const { count } = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="mt-5 wh-100 w-full d-grid place-items-center">
      <div className="d-flex flex-column gap-5 align-items-center justify-content-center">
        <h2>Counter</h2>
        <div className="d-flex gap-3">
          <button
            onClick={() => dispatch(setCount(3))}
            className="btn btn-primary btn-lg"
          >
            3 e eşitle
          </button>
          <button
            onClick={() => dispatch(increase())}
            className="btn btn-success btn-lg"
          >
            Arttır
          </button>
          <span className="fw-bold fs-3">{count} </span>
          <button
            disabled={count === 0}
            onClick={() => dispatch(decrease())}
            className="btn btn-danger btn-lg"
          >
            Azalt
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="btn btn-secondary btn-lg"
          >
            Sıfırla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
