"use strict";

const { forwardRef } = require('react');

const SwitchToggleButton1Intermediate = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999988019965" y="5.999996563894001" width="19.999999999999886" height="12.000000004577942" rx="5.999993987784044" ry="5.999993987784044" transform="translate(23.999999973447217 23.999993134958544) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.999999977100742,17.999996563434252c-3.313708498801134,0-6-2.686291501198866-6-6,0-3.313708498797496,2.686291501198866-6,6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.999999977100742,5.999996563434252c3.313708498799315,0,6,2.686291501202504,6,6,0,3.313708498801134-2.686291501200685,6-6,6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SwitchToggleButton1Intermediate.displayName = 'SwitchToggleButton1Intermediate';

module.exports = SwitchToggleButton1Intermediate;
module.exports.SwitchToggleButton1Intermediate = SwitchToggleButton1Intermediate;
module.exports.default = SwitchToggleButton1Intermediate;
