'use strict';

const { createElement, forwardRef } = require('react');

const Plaque = forwardRef(function Plaque(
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
    createElement('path', {"d":"M21.999999981000656,15.999996563432433V7.999996563432433c-1.656860351560681,0-3-1.3431396484375-3-3H4.999999981000656c0,1.6568603515625-1.343139648430224,3-3,3v8c1.656860351569776,0,3,1.3431396484375,3,3h14c0-1.6568603515625,1.343139648439319-3,3-3Z","key":"0"}),
    createElement('line', {"x1":"7.999999981000656","y1":"9.999996563432433","x2":"15.999999981000656","y2":"9.999996563432433","key":"1"}),
    createElement('line', {"x1":"7.999999981000656","y1":"13.999996563432433","x2":"15.999999981000656","y2":"13.999996563432433","key":"2"})
  );
});

Plaque.displayName = 'Plaque';

module.exports = Plaque;
module.exports.Plaque = Plaque;
module.exports.default = Plaque;
