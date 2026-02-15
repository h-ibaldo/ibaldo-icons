"use strict";

const { forwardRef } = require('react');

const ChartLineSquare2ArrowIn = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M1.974731441029689,9.000000001669832l.00000000072032,8c.000000000250111,2.761423749150708,2.238576251299492,4.999999999799911,5.0000000004502,4.999999999548891l10-.000000000898581c2.761423749149799-.000000000251021,4.999999999799911-2.238576251300401,4.9999999995498-5.000000000451109l-.0000000009004-10c-.000000000239197-2.76142374914707-2.238576251289487-4.999999999799911-5.000000000439286-4.999999999548891l-4.999999999110514.000000000538421" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.974731441299809 6.000000000771252 7.974731441299809 4.000000000771252 5.974731441299809 2.000000000771252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731441299809" y1="4.000000000771252" x2="7.974731441299809" y2="4.000000000771252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.974731441299809 15.000000000589353 8.974731441299809 11.000000000589353 12.974731441299809 15.000000000589353 17.974731441299809 9.000000000589353" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartLineSquare2ArrowIn.displayName = 'ChartLineSquare2ArrowIn';

module.exports = ChartLineSquare2ArrowIn;
module.exports.ChartLineSquare2ArrowIn = ChartLineSquare2ArrowIn;
module.exports.default = ChartLineSquare2ArrowIn;
