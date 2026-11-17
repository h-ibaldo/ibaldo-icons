"use strict";

const { forwardRef } = require('react');

const AtSign3Alert = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="7.999998944229446" y1="5.000000000709406" x2="8.000000022319" y2="8.000000000709406" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999998944229446" y1="11.000000000709406" x2="8.000000022319" y2="10.990000000709188" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="8.000000019897016" cy="7.999999998282647" r="5.99999999757631" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.505065935440143,16.286071773202821c.611083984369543,1.022216796875,1.717407226560681,1.713928222654431,2.994934082029431,1.713928222654431,1.932983398441138,0,3.5-1.5670166015625,3.5-3.5,0-1.277526855467841-.691711425779431-2.383850097654431-1.713928222659888-2.994934082029431" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.425231951059686,16.971008296639411c1.022338867191138,2.926330566405341,3.799682617191138,5.028991699217841,7.074768066409888,5.028991699217841" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.000000017469574,14.499999995857252v1.5c0,1.104553222657159.895446777340112,2,2,2s2-.895446777342841,2-2v-1.5c0-3.275085449217841-2.102661132808862-6.052429199217841-5.02899169921875-7.074768066404431" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.500000017469574" y1="21.999999995857252" x2="18.000000017469574" y2="21.999999995857252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AtSign3Alert.displayName = 'AtSign3Alert';

module.exports = AtSign3Alert;
module.exports.AtSign3Alert = AtSign3Alert;
module.exports.default = AtSign3Alert;
