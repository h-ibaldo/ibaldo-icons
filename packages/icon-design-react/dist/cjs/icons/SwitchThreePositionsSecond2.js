"use strict";

const { forwardRef } = require('react');

const SwitchThreePositionsSecond2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.999999977100742" cy="15.999996563436071" r="6.000000000000909" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999977029802" y1="18.828423688180919" x2="11.999999977160769" y2="13.171569438687584" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="19.999999977100742" cy="3.99999656343789" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999977100742" cy="3.99999656343789" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="3.999999977100742" cy="3.99999656343789" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999977100742" y1="3.99999656343789" x2="11.999999977100742" y2="3.99999656343789" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SwitchThreePositionsSecond2.displayName = 'SwitchThreePositionsSecond2';

module.exports = SwitchThreePositionsSecond2;
module.exports.SwitchThreePositionsSecond2 = SwitchThreePositionsSecond2;
module.exports.default = SwitchThreePositionsSecond2;
