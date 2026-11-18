'use strict';

const { createElement, forwardRef } = require('react');

const Watch = forwardRef(function Watch(
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
    createElement('path', {"d":"M4 12C4 16.418 7.582 20 12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12Z","key":"0"}),
    createElement('path', {"d":"M12 8L12 12L15 12","key":"1"}),
    createElement('path', {"d":"M19.93 13L22 13L22 11L19.93 11","key":"2"}),
    createElement('path', {"d":"M6 3L6 6.723","key":"3"}),
    createElement('path', {"d":"M18 6.719L18 3","key":"4"}),
    createElement('path', {"d":"M18 21L18 17.277","key":"5"}),
    createElement('path', {"d":"M6 17.281L6 21","key":"6"})
  );
});

Watch.displayName = 'Watch';

module.exports = Watch;
module.exports.Watch = Watch;
module.exports.default = Watch;
