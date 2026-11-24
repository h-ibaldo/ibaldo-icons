'use strict';

const { createElement, forwardRef } = require('react');

const Text3DHexagonSmall = forwardRef(function Text3DHexagonSmall(
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
    createElement('path', {"d":"M3 15.234L3 8.766C3 7.676 3.59 6.672 4.543 6.145L10.543 2.809C11.449 2.305 12.551 2.305 13.457 2.809L19.457 6.145C20.41 6.672 21 7.676 21 8.766L21 15.234C21 16.324 20.41 17.328 19.457 17.859L13.457 21.191C12.551 21.695 11.449 21.695 10.543 21.191L4.543 17.859C3.59 17.328 3 16.324 3 15.234Z","key":"0"}),
    createElement('path', {"d":"M14 9L14 15C15.656 15 17 13.656 17 12C17 10.344 15.656 9 14 9Z","key":"1"}),
    createElement('path', {"d":"M9.5 9C10.328 9 11 9.672 11 10.5C11 11.328 10.328 12 9.5 12","key":"2"}),
    createElement('path', {"d":"M9.5 12C10.328 12 11 12.672 11 13.5C11 14.328 10.328 15 9.5 15","key":"3"}),
    createElement('path', {"d":"M9.5 9L8 9","key":"4"}),
    createElement('path', {"d":"M9.5 12L9 12","key":"5"}),
    createElement('path', {"d":"M9.5 15L8 15","key":"6"})
  );
});

Text3DHexagonSmall.displayName = 'Text3DHexagonSmall';

module.exports = Text3DHexagonSmall;
module.exports.Text3DHexagonSmall = Text3DHexagonSmall;
module.exports.default = Text3DHexagonSmall;
