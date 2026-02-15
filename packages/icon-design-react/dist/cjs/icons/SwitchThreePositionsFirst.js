"use strict";

const { forwardRef } = require('react');

const SwitchThreePositionsFirst = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.999999977274911" cy="15.99999656343698" r="5.999999999997044" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999977360858" y1="17.99999656334694" x2="9.999999977180778" y2="13.999996563525201" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999976737854" cy="3.99999656343789" r="2.000000000001364" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="3.999999976737854" cy="3.99999656379714" r="2.000000000001819" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="19.999999976737854" cy="3.99999656307773" r="2.000000000001364" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.999999976740582" y1="3.999996563798049" x2="3.999999976740582" y2="3.999996563798049" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SwitchThreePositionsFirst.displayName = 'SwitchThreePositionsFirst';

module.exports = SwitchThreePositionsFirst;
module.exports.SwitchThreePositionsFirst = SwitchThreePositionsFirst;
module.exports.default = SwitchThreePositionsFirst;
