'use strict';

const { createElement, forwardRef } = require('react');

const CheckSquareNested = forwardRef(function CheckSquareNested(
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
    createElement('path', {"d":"M12 15L14 17L18 13","key":"0"}),
    createElement('path', {"d":"M8 22L8 9.75C8 8.785 8.781 8 9.75 8L22 8","key":"1"}),
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"2"})
  );
});

CheckSquareNested.displayName = 'CheckSquareNested';

module.exports = CheckSquareNested;
module.exports.CheckSquareNested = CheckSquareNested;
module.exports.default = CheckSquareNested;
