import React, { PropTypes } from "react";
import radium from "radium";
import colors from "../../styles/colors";
import { textBodySmall } from "../../utils/typography";
import propTypes from "../../utils/propTypes";

const styles = Object.assign({}, {
  color: colors.textPrimary,
  marginBottom: 0,
  marginTop: 0,
}, textBodySmall());

const TextBodySmall = ({ children, style }) => (
  <p style={[styles, style]}>
    {children}
  </p>
);

TextBodySmall.propTypes = {
  children: PropTypes.string.isRequired,
  style: propTypes.style,
};

export default radium(TextBodySmall);
