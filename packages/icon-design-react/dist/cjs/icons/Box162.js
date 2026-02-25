"use strict";

const { forwardRef } = require('react');

const Box162 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="1.999999999909051 9.999999999998181 15.999999999909051 2.999999999998181 21.99999999991087 5.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="21.999999999909051 5.999999999998181 7.999999999909051 12.999999999998181 1.999999999907232 9.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="21.999999999998181 9.999999999548891 7.999999999683496 3.000000000178261 1.999999999818101 6.000000000447471" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.99999999981992 6.000000000447471 16.000000000132786 12.999999999818101 22 9.999999999548891" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.999999999818101 11.999999999998181 5.999999999818101 17.999999999998181 11.999999999818101 20.999999999998181 17.999999999818101 17.999999999998181 17.999999999818101 11.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.99999999981992" y1="10.999999999998181" x2="11.99999999981992" y2="20.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Box162.displayName = 'Box162';

module.exports = Box162;
module.exports.Box162 = Box162;
module.exports.default = Box162;
