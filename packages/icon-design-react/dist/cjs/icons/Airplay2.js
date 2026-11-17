'use strict';

const { createElement, forwardRef } = require('react');

const Airplay2 = forwardRef(function Airplay2(
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
    createElement('path', {"d":"M17.999999971900252,15.999996564601133h2c1.104553222659888,0,2-1.044687906902254,2-2.333333333332121V4.333329897933254c0-1.288645426429866-.895446777340112-2.333333333332121-2-2.333333333332121H3.999999971900252c-1.104553222659888,0-2,1.044687906902254-2,2.333333333332121v9.333333333335759c0,1.288645426429866.895446777340112,2.333333333332121,2,2.333333333332121h2","key":"0"}),
    createElement('polygon', {"points":"11.999999971900252 14.999996564601133 6.999999971889338 21.999996564601133 16.999999971889338 21.999996564601133 11.999999971900252 14.999996564601133","key":"1"})
  );
});

Airplay2.displayName = 'Airplay2';

module.exports = Airplay2;
module.exports.Airplay2 = Airplay2;
module.exports.default = Airplay2;
