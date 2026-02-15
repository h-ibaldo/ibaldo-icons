"use strict";

const { forwardRef } = require('react');

const ChartLineCircle3CheckChecked = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M21.748596185922906,10.000000000749424c.131225585939319.646240234371362.20086669921875,1.31494140625.20086669921875,2,0,5.52294921875-4.477172851558862,10-10,10-5.522827148440228,0-10-4.47705078125-10-10C1.949462885141656,6.477172852308286,6.426635736701428,2.000000000749424,11.949462885141656,2.000000000749424c.684997558590112,0,1.353698730470569.069580078121362,2,.200927734371362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.949462885141656 5.000000000749424 18.949462885141656 7.000000000749424 21.949462885141656 4.000000000749424" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartLineCircle3CheckChecked.displayName = 'ChartLineCircle3CheckChecked';

module.exports = ChartLineCircle3CheckChecked;
module.exports.ChartLineCircle3CheckChecked = ChartLineCircle3CheckChecked;
module.exports.default = ChartLineCircle3CheckChecked;
