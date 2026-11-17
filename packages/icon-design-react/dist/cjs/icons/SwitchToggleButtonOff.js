"use strict";

const { forwardRef } = require('react');

const SwitchToggleButtonOff = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999988020136" y="5.999996563894001" width="20" height="12.000000004577942" rx="5.99999401221545" ry="5.99999401221545" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.999999977100742,5.999996563434252c3.313708498799315,0,6,2.686291501202504,6,6,0,3.313708498801134-2.686291501200685,6-6,6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SwitchToggleButtonOff.displayName = 'SwitchToggleButtonOff';

module.exports = SwitchToggleButtonOff;
module.exports.SwitchToggleButtonOff = SwitchToggleButtonOff;
module.exports.default = SwitchToggleButtonOff;
