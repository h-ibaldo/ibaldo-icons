'use strict';

const { createElement, forwardRef } = require('react');

const ArrowOrbitAxis = forwardRef(function ArrowOrbitAxis(
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
    createElement('path', {"d":"M9 16L12 19L9 21.5","key":"0"}),
    createElement('path', {"d":"M12 3L12 3","key":"1"}),
    createElement('path', {"d":"M12 7L12 7","key":"2"}),
    createElement('path', {"d":"M12 11L12 11","key":"3"}),
    createElement('path', {"d":"M17 18.191C19.984 17.152 22 15.219 22 13C22 10.539 19.531 8.43 16 7.504","key":"4"}),
    createElement('path', {"d":"M8 7.504C4.469 8.43 2 10.539 2 13C2 16.313 6.477 19 12 19","key":"5"})
  );
});

ArrowOrbitAxis.displayName = 'ArrowOrbitAxis';

module.exports = ArrowOrbitAxis;
module.exports.ArrowOrbitAxis = ArrowOrbitAxis;
module.exports.default = ArrowOrbitAxis;
