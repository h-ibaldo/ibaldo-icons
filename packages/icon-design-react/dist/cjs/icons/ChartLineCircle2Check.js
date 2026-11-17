"use strict";

const { forwardRef } = require('react');

const ChartLineCircle2Check = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M21.799133300790345,10c.131225585929315.646240234371362.200866699209655,1.31494140625.200866699209655,2,0,5.52294921875-4.477172851549767,10-10,10-5.522827148440228,0-10-4.47705078125-10-10C2,6.4771728515625,6.477172851559772,2,12,2c.684997558590112,0,1.353698730469659.069580078121362,2,.200927734371362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17 5 19 7 22 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7 15 10 11 14 14 17 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartLineCircle2Check.displayName = 'ChartLineCircle2Check';

module.exports = ChartLineCircle2Check;
module.exports.ChartLineCircle2Check = ChartLineCircle2Check;
module.exports.default = ChartLineCircle2Check;
