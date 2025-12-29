import React, { useReducer } from "react";

/* ---------------- INITIAL STATE ---------------- */

const initialState = {
  step: 1,
  values: {
    name: "",
    email: "",
    username: "",
    password: ""
  },
  isSubmitted: false
};

/* ---------------- REDUCER ---------------- */

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value
        }
      };

    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "PREVIOUS_STEP":
      return { ...state, step: state.step - 1 };

    case "SUBMIT_FORM":
      return { ...state, isSubmitted: true };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}


export default function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, values, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div style={styles.container}>
        <h2>Form Submitted Successfully</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Step {step} of 3</h2>

      {step === 1 && (
        <>
          <input
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />

          <button
            disabled={!values.name || !values.email}
            onClick={() => dispatch({ type: "NEXT_STEP" })}
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />

          <div>
            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>
            <button
              disabled={!values.username || !values.password}
              onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
              Next
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h3>Review Details</h3>
          <p><strong>Name:</strong> {values.name}</p>
          <p><strong>Email:</strong> {values.email}</p>
          <p><strong>Username:</strong> {values.username}</p>

          <div>
            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>
            <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }
};
