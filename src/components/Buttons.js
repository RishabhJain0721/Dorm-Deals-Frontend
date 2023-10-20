import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

/**
 * White Button component
 *
 * @param {Object} props - Props
 * @param {string} props.navigation - Navigation path
 * @param {string} props.val - Button text
 * @returns {JSX.Element}
 * @constructor
 */
const WhiteButton = (props) => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-white text-blue-500 text-lg font-semibold px-6 py-3 rounded-full hover:bg-blue-200 hover:text-blue-600 transition duration-300"
      onClick={() => navigate(props.navigation)}
    >
      {props.val}
    </button>
  );
};

/**
 * Yellow Button component
 *
 * @param {Object} props - Props
 * @param {string} props.navigation - Navigation path
 * @param {string} props.val - Button text
 * @returns {JSX.Element}
 * @constructor
 */
const YellowButton = (props) => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-yellow-500 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-300"
      onClick={() => navigate(props.navigation)}
    >
      {props.val}
    </button>
  );
};

/**
 * Blue Button component
 *
 * @param {Object} props - Props
 * @param {boolean} props.loading - Loading state
 * @param {string} props.navigation - Navigation path
 * @param {string} props.val - Button text
 * @returns {JSX.Element}
 * @constructor
 */
const BlueButton = (props) => {
  const navigate = useNavigate();

  return (
    <button
      disabled={!!props.loading}
      className="bg-blue-500 text-white rounded-full py-2 px-4 mt-4 hover:bg-blue-600 disabled:opacity-80 inline-flex"
      onClick={() => navigate(props.navigation)}
    >
      {props.loading ? (
        <span className="inline-block px-2">
          <TailSpin width="23" height="23" color="white" />
        </span>
      ) : (
        props.val
      )}
    </button>
  );
};

export { WhiteButton, YellowButton, BlueButton };
