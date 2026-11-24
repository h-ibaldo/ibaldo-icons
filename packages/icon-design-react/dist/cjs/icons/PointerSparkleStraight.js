'use strict';

const { createElement, forwardRef } = require('react');

const PointerSparkleStraight = forwardRef(function PointerSparkleStraight(
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
    createElement('path', {"d":"M2 6.547L2 20.738C2 21.609 3.031 22.063 3.672 21.48L7.5 18L12.707 18C13.578 18 14.035 16.957 13.438 16.32L3.73 5.867C3.113 5.199 2 5.637 2 6.547Z","key":"0"}),
    createElement('path', {"d":"M17 3L17 4","key":"1"}),
    createElement('path', {"d":"M17 10L17 11","key":"2"}),
    createElement('path', {"d":"M13 7L14 7","key":"3"}),
    createElement('path', {"d":"M20 7L21 7","key":"4"})
  );
});

PointerSparkleStraight.displayName = 'PointerSparkleStraight';

module.exports = PointerSparkleStraight;
module.exports.PointerSparkleStraight = PointerSparkleStraight;
module.exports.default = PointerSparkleStraight;
