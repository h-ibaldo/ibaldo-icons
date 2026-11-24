'use strict';

const { createElement, forwardRef } = require('react');

const NoEntry = forwardRef(function NoEntry(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('circle', {"cx":"12.025268548975873","cy":"11.997565476121054","r":"10","key":"0"}),
    createElement('rect', {"x":"6.025268548975873","y":"9.997565476121054","width":"12","height":"4","key":"1"})
  );
});

NoEntry.displayName = 'NoEntry';

module.exports = NoEntry;
module.exports.NoEntry = NoEntry;
module.exports.default = NoEntry;
