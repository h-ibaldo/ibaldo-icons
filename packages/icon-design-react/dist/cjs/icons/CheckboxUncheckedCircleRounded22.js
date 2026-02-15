"use strict";

const { forwardRef } = require('react');

const CheckboxUncheckedCircleRounded22 = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  React.createElement('svg', {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.949462885140747" cy="12.000000000480213" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckboxUncheckedCircleRounded22.displayName = 'CheckboxUncheckedCircleRounded22';

module.exports = CheckboxUncheckedCircleRounded22;
module.exports.CheckboxUncheckedCircleRounded22 = CheckboxUncheckedCircleRounded22;
module.exports.default = CheckboxUncheckedCircleRounded22;
