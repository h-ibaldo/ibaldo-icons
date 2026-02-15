"use strict";

const { forwardRef } = require('react');

const ClockArrowUp = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="5" y1="21.999999999887223" x2="5" y2="13.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8 16.999999999887223 5 13.999999999887223 2 16.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12 6.999999999887223 12 11.999999999887223 17 11.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10,21.792114257697904c.646850585939319.131958007810681,1.314147949220569.207885742189319,2,.207885742189319,5.522888183590112,0,10-4.477172851558862,10-10,0-5.522827148439319-4.477111816409888-10-10-10C6.814758300779431,1.999999999887223,2.552368164060681,5.946777343637223,2.050476074220569,10.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ClockArrowUp.displayName = 'ClockArrowUp';

module.exports = ClockArrowUp;
module.exports.ClockArrowUp = ClockArrowUp;
module.exports.default = ClockArrowUp;
