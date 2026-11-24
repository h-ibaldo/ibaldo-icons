'use strict';

const { createElement, forwardRef } = require('react');

const DocumentListHeart = forwardRef(function DocumentListHeart(
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
    createElement('path', {"d":"M10 20L5 20C3.895 20 3 19.105 3 18L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 11","key":"0"}),
    createElement('path', {"d":"M7 7L7 7","key":"1"}),
    createElement('path', {"d":"M17 7L10 7","key":"2"}),
    createElement('path', {"d":"M7 11L7 11","key":"3"}),
    createElement('path', {"d":"M17 11L10 11","key":"4"}),
    createElement('path', {"d":"M7 15L7 15","key":"5"}),
    createElement('path', {"d":"M11 15L10 15","key":"6"}),
    createElement('path', {"d":"M17.293 21.707L14.5 18.914C13.672 18.086 13.672 16.742 14.5 15.914C15.328 15.086 16.672 15.086 17.5 15.914L18 16.414L18.5 15.914C19.328 15.086 20.672 15.086 21.5 15.914C22.328 16.742 22.328 18.086 21.5 18.914L18.707 21.707C18.316 22.098 17.684 22.098 17.293 21.707Z","key":"7"})
  );
});

DocumentListHeart.displayName = 'DocumentListHeart';

module.exports = DocumentListHeart;
module.exports.DocumentListHeart = DocumentListHeart;
module.exports.default = DocumentListHeart;
