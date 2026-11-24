'use strict';

const { createElement, forwardRef } = require('react');

const PresentationBoard = forwardRef(function PresentationBoard(
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
    createElement('path', {"d":"M20 17L4 17C2.895 17 2 16.105 2 15L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 15C22 16.105 21.105 17 20 17Z","key":"0"}),
    createElement('path', {"d":"M12 4L12 2","key":"1"}),
    createElement('path', {"d":"M12 22L12 17","key":"2"}),
    createElement('path', {"d":"M17 22L7 22","key":"3"}),
    createElement('path', {"d":"M7 13L7 11","key":"4"}),
    createElement('path', {"d":"M12 13L12 8","key":"5"}),
    createElement('path', {"d":"M17 13L17 9","key":"6"})
  );
});

PresentationBoard.displayName = 'PresentationBoard';

module.exports = PresentationBoard;
module.exports.PresentationBoard = PresentationBoard;
module.exports.default = PresentationBoard;
