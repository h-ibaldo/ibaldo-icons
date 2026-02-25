"use strict";

const { forwardRef } = require('react');

const SwitchToggleButton1On2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999988019908" y="5.999996563894001" width="20" height="12.000000004577942" rx="5.999993987784006" ry="5.999993987784006" transform="translate(23.999999973447217 23.999993134958544) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.999999977100742,17.999996563434252c-3.313708498801134,0-6-2.686291501198866-6-6,0-3.313708498797496,2.686291501198866-6,6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SwitchToggleButton1On2.displayName = 'SwitchToggleButton1On2';

module.exports = SwitchToggleButton1On2;
module.exports.SwitchToggleButton1On2 = SwitchToggleButton1On2;
module.exports.default = SwitchToggleButton1On2;
