"use strict";

const { forwardRef } = require('react');

const CirclesStates1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="7.999999976489562" cy="15.998779299956368" r="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.74127194914945,13.740051272612618c2.464111328130457-.7464599609375,4.258728027340112-3.03338623046875,4.258728027340112-5.74127197265625,0-3.313720703125-2.686279296869543-6-6-6-2.707885742180224,0-4.994812011709655,1.79461669921875-5.741271972648974,4.25872802734375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.74127194914945,17.740051272612618c2.464111328130457-.7464599609375,4.258728027340112-3.03338623046875,4.258728027340112-5.74127197265625,0-3.313720703125-2.686279296869543-6-6-6-2.707885742180224,0-4.994812011709655,1.79461669921875-5.741271972648974,4.25872802734375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CirclesStates1.displayName = 'CirclesStates1';

module.exports = CirclesStates1;
module.exports.CirclesStates1 = CirclesStates1;
module.exports.default = CirclesStates1;
