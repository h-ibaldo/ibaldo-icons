"use strict";

const { forwardRef } = require('react');

const Cloud3Check = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M16.977172851560681,13.048095676607772c-.230346679691138-2.82556152341931-2.592224121090112-5.048095703110448-5.477172851560681-5.048095703110448s-5.246826171880457,2.222534179691138-5.477172851560681,5.048095703110448c-2.257751464849207.24133300783069-4.022827148439319,2.130065917979664-4.022827148439319,4.451904296889552,0,2.485290527340112,2.014709472650793,4.5,4.5,4.5h10c2.485290527340112,0,4.5-2.014709472659888,4.5-4.5,0-2.321838378909888-1.765075683599207-4.210571289058862-4.022827148439319-4.451904296889552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16 3.999999973497324 18 5.999999973497324 22 1.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cloud3Check.displayName = 'Cloud3Check';

module.exports = Cloud3Check;
module.exports.Cloud3Check = Cloud3Check;
module.exports.default = Cloud3Check;
