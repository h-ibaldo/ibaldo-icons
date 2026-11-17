"use strict";

const { forwardRef } = require('react');

const AtSign3Clock2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="8.025268557447816" cy="7.999999998293333" r="5.999999997576424" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.025268559869801 5.00000000071941 8.025268559869801 8.00000000071941 11.025268559869801 8.00000000071941" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.530334472990944,16.286071773213735c.611083984369543,1.022216796875,1.717407226569776,1.713928222654431,2.994934082029431,1.713928222654431,1.932983398439319,0,3.5-1.5670166015625,3.5-3.5,0-1.27752685546875-.691711425779431-2.383850097654431-1.713928222659888-2.994934082029431" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.450500488610487,16.971008296649416c1.022338867189319,2.92633056640625,3.799682617200233,5.02899169921875,7.074768066409888,5.02899169921875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.025268555020375,14.499999995868166v1.5c0,1.10455322265625.895446777340112,2,2,2s2-.89544677734375,2-2v-1.5c0-3.27508544921875-2.102661132810681-6.05242919921875-5.028991699209655-7.074768066404431" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.525268555020375" y1="21.999999995868166" x2="18.025268555020375" y2="21.999999995868166" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AtSign3Clock2.displayName = 'AtSign3Clock2';

module.exports = AtSign3Clock2;
module.exports.AtSign3Clock2 = AtSign3Clock2;
module.exports.default = AtSign3Clock2;
