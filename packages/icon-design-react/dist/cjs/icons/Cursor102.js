"use strict";

const { forwardRef } = require('react');

const Cursor102 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M9,21.970769791338171l.000008920840628-6.000087301210442-5.000008920840628.00000465435005L12.029418957250527,1.970687144486874l7.970581042749473,14.000082646851297-5-.000082646860392-.000008920840628,6.000087301210442-5.999991079159372-.00000465435005Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cursor102.displayName = 'Cursor102';

module.exports = Cursor102;
module.exports.Cursor102 = Cursor102;
module.exports.default = Cursor102;
