"use strict";

const { forwardRef } = require('react');

const CloudLupeSearch12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="12.171569800579618" cy="16.170349124301538" r="3.999999999999318" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999976489562" y1="18.998779299956368" x2="18.171569800850193" y2="22.170349124033237" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.171569800850193,16.748229983630154c1.764404296880457-.77215576171875,3-2.5286865234375,3-4.577880859375,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.9068603515625-.438171386709655-2.8822021484375-2.919616699209655-5.0931396484375-5.924255371090112-5.0931396484375-3.004638671869543,0-5.486083984369543,2.2109375-5.924255371090112,5.0931396484375-2.318725585939319.43450927734375-4.075744628909888,2.4620361328125-4.075744628909888,4.9068603515625,0,2.0491943359375,1.235595703130457,3.80572509765625,3,4.577880859375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CloudLupeSearch12.displayName = 'CloudLupeSearch12';

module.exports = CloudLupeSearch12;
module.exports.CloudLupeSearch12 = CloudLupeSearch12;
module.exports.default = CloudLupeSearch12;
