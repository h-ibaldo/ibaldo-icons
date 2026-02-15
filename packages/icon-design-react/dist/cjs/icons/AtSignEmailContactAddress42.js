"use strict";

const { forwardRef } = require('react');

const AtSignEmailContactAddress42 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="9.025264919242545" y="7.0000000003769" width="5.999999910608494" height="9.999999999999488" rx="2.999996965248122" ry="2.999996965248122" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.025268559869801" y1="22.00000000071941" x2="12.025268559869801" y2="22.000000000721229" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.025268559869801,14.0000080007203v-4.000016000000869c0-4.418273580367895-3.581718419620302-7.99999200000002-7.999991999999111-7.99999200000002h-.000016000001779c-4.418273580369714,0-7.999991999999111,3.581718419632125-7.999991999999111,7.99999200000002v4.000016000000869c0,4.418273580367895,3.581718419629397,7.999991999999111,7.999991999999111,7.999991999999111h.000016000001779" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.025268559869801,14.00000000071941v1c0,1.10456949966283.895430500349903,2,2,2h1c1.104569499659192,0,2-.89543050033717,2-2v-1.000000000001819" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AtSignEmailContactAddress42.displayName = 'AtSignEmailContactAddress42';

module.exports = AtSignEmailContactAddress42;
module.exports.AtSignEmailContactAddress42 = AtSignEmailContactAddress42;
module.exports.default = AtSignEmailContactAddress42;
