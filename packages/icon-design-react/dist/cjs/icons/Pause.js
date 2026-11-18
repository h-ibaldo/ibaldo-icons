'use strict';

const { createElement, forwardRef } = require('react');

const Pause = forwardRef(function Pause(
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
    createElement('path', {"d":"M7 4L7 20","key":"0"}),
    createElement('path', {"d":"M16 4L16 20","key":"1"})
  );
});

Pause.displayName = 'Pause';

module.exports = Pause;
module.exports.Pause = Pause;
module.exports.default = Pause;
