'use strict';

const { createElement, forwardRef } = require('react');

const Calculator = forwardRef(function Calculator(
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
    createElement('path', {"d":"M8 10L9 10","key":"0"}),
    createElement('path', {"d":"M8 13L9 13","key":"1"}),
    createElement('path', {"d":"M8 16L9 16","key":"2"}),
    createElement('path', {"d":"M8 19L9 19","key":"3"}),
    createElement('path', {"d":"M12 10L13 10","key":"4"}),
    createElement('path', {"d":"M12 13L13 13","key":"5"}),
    createElement('path', {"d":"M12 16L13 16","key":"6"}),
    createElement('path', {"d":"M12 19L13 19","key":"7"}),
    createElement('path', {"d":"M16 10L17 10","key":"8"}),
    createElement('path', {"d":"M16 13L17 13","key":"9"}),
    createElement('path', {"d":"M16 16L17 16L17 19L16 19Z","key":"10"}),
    createElement('path', {"d":"M8 6L17 6","key":"11"}),
    createElement('path', {"d":"M8 2L17 2C18.656 2 20 3.344 20 5L20 19C20 20.656 18.656 22 17 22L8 22C6.344 22 5 20.656 5 19L5 5C5 3.344 6.344 2 8 2Z","key":"12"})
  );
});

Calculator.displayName = 'Calculator';

module.exports = Calculator;
module.exports.Calculator = Calculator;
module.exports.default = Calculator;
