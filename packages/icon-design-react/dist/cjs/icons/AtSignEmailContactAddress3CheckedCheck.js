"use strict";

const { forwardRef } = require('react');

const AtSignEmailContactAddress3CheckedCheck = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="8.000000005032234" cy="8.00000000045361" r="5.999999997573127" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.505065920580819,16.286071775373784c.611083984369543,1.022216796875,1.717407226558862,1.713928222653522,2.994934082029431,1.713928222653522,1.932983398430224,0,3.5-1.567016601560681,3.5-3.5,0-1.277526855466931-.691711425779431-2.383850097653522-1.713928222659888-2.994934082028522" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.425231936200362,16.971008298810375c1.022338867189319,2.92633056640625,3.799682617189319,5.028991699216931,7.074768066409888,5.028991699216931" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.00000000261025,14.499999998027306v1.5c0,1.104553222658069.895446777340112,2,2,2,1.104553222650793,0,2-.895446777341931,2-2v-1.5c0-3.275085449216931-2.102661132819776-6.052429199216931-5.028991699220569-7.074768066403522" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.50000000261025" y1="21.999999998027306" x2="18.00000000261025" y2="21.999999998027306" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.000000005029506 8.000000000453838 7.000000005029506 10.000000000453838 10.000000005029506 6.000000000453838" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AtSignEmailContactAddress3CheckedCheck.displayName = 'AtSignEmailContactAddress3CheckedCheck';

module.exports = AtSignEmailContactAddress3CheckedCheck;
module.exports.AtSignEmailContactAddress3CheckedCheck = AtSignEmailContactAddress3CheckedCheck;
module.exports.default = AtSignEmailContactAddress3CheckedCheck;
