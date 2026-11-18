'use strict';

const { createElement, forwardRef } = require('react');

const PointerQuestionStraight = forwardRef(function PointerQuestionStraight(
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
    createElement('path', {"d":"M2 6.547L2 20.738C2 21.609 3.031 22.063 3.672 21.48L7.5 18L12.707 18C13.578 18 14.035 16.957 13.438 16.32L3.734 5.867C3.113 5.199 2 5.637 2 6.547Z","key":"0"}),
    createElement('path', {"d":"M15 5C15 3.895 15.895 3 17 3C18.105 3 19 3.895 19 5C19 5.641 18.746 6.254 18.293 6.707L17 8","key":"1"}),
    createElement('path', {"d":"M17 11L17 11","key":"2"})
  );
});

PointerQuestionStraight.displayName = 'PointerQuestionStraight';

module.exports = PointerQuestionStraight;
module.exports.PointerQuestionStraight = PointerQuestionStraight;
module.exports.default = PointerQuestionStraight;
