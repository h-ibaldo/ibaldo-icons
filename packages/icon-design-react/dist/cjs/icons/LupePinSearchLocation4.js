"use strict";

const { forwardRef } = require('react');

const LupePinSearchLocation4 = forwardRef(({
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
    viewBox: "0 0 24 24.000000000000909",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="17.99999997652958" cy="16.998779299956368" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.171569800750149" y1="19.827209475737618" x2="12.999999976489562" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.999999976489562,1.998779299956368C4.686279273370019,1.998779299956368,1.999999976489562,4.685058596831368,1.999999976489562,7.998779299956368c0,1.9208984375.763061523441138,3.7630615234375,2.121337890630457,5.121337890625l3.878662109369543,3.878662109375,3.878662109380457-3.878662109375c1.358276367180224-1.3582763671875,2.121337890619543-3.200439453125,2.121337890619543-5.121337890625,0-3.313720703125-2.686279296869543-6-6-6Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="7.999999976489562" cy="7.998779299956368" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupePinSearchLocation4.displayName = 'LupePinSearchLocation4';

module.exports = LupePinSearchLocation4;
module.exports.LupePinSearchLocation4 = LupePinSearchLocation4;
module.exports.default = LupePinSearchLocation4;
