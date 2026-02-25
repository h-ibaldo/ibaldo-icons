"use strict";

const { forwardRef } = require('react');

const SwitchTwoPositionOff12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.97473141363912" cy="15.998779298524823" r="6.00000000000216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.732090726536626" y1="11.756138611388451" x2="11.267624632466323" y2="15.291672517319967" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.974738027380369" y="1.9987792977455" width="4.000000025022189" height="5.999999999998408" rx="1.999998016072261" ry="1.999998016072261" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.974731413605696" y1="1.998779298537556" x2="19.974731413605696" y2="7.998779298537556" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SwitchTwoPositionOff12.displayName = 'SwitchTwoPositionOff12';

module.exports = SwitchTwoPositionOff12;
module.exports.SwitchTwoPositionOff12 = SwitchTwoPositionOff12;
module.exports.default = SwitchTwoPositionOff12;
