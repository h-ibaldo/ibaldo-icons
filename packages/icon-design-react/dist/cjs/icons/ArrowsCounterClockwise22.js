"use strict";

const { forwardRef } = require('react');

const ArrowsCounterClockwise22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M16.999999999909051,7.999999999768988l-.00000000026921-3.99999999991087,4-.00000000026921" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.99999999973079,16.000000000218279l.00000000062937,3.99999999991087-4,.000000000631189" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.000000000338332,19.482360840058391c-2.411437988357648-1.614624023328361-4.000000000200089-4.362426757628782-4.000000000338332-7.482360839658213-.000000000221917-4.970581054691138,4.029418944908684-9.000000000181899,8.999999999599822-9.000000000400178.33856201171875-.000000000021828.671813964840112.021362304649301,1,.05950927728918" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.999999998188287,4.517639159481405c2.411437988499529,1.614624023108263,4.000000000589353,4.362426757268622,4.000000001011358,7.482360839298053.000000000669388,4.970581054689319-4.029418944101053,9.000000000551154-8.999999998792191,9.000000001220542-.33856201171875.000000000040018-.671813964847388-.021362304600189-1.000000000007276-.059509277210964" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ArrowsCounterClockwise22.displayName = 'ArrowsCounterClockwise22';

module.exports = ArrowsCounterClockwise22;
module.exports.ArrowsCounterClockwise22 = ArrowsCounterClockwise22;
module.exports.default = ArrowsCounterClockwise22;
