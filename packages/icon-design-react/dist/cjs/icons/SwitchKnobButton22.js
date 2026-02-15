"use strict";

const { forwardRef } = require('react');

const SwitchKnobButton22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="14.596194054703997" y="3.903802485619486" width="4.000000000003247" height="8.999999999999588" rx=".999999999997606" ry=".999999999997606" transform="translate(10.803298421659893 -9.273864597550567) rotate(44.999999998673481)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.786608795762731,5.384960619743651c-3.476881677239362-2.189208464013063-8.122621567010356-1.7768733694611-11.150569849489329,1.251074913154298-3.514688411751195,3.514688411913085-3.514688411622046,9.213233649603353.000000000289219,12.727922061360005,3.514731570290678,3.51473157012515,9.213233649599715,3.514688411625684,12.727922061360005-.0000000002874,3.02799144085111-3.027991440987535,3.440369693569664-7.673688172399125,1.251074912650438-11.15056984954208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SwitchKnobButton22.displayName = 'SwitchKnobButton22';

module.exports = SwitchKnobButton22;
module.exports.SwitchKnobButton22 = SwitchKnobButton22;
module.exports.default = SwitchKnobButton22;
