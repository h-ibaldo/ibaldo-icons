'use strict';

const { createElement, forwardRef } = require('react');

const PlugBolt = forwardRef(function PlugBolt(
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
    createElement('path', {"d":"M3 9L15 9L15 13C15 15.762 12.762 18 10 18L8 18C5.238 18 3 15.762 3 13Z","key":"0"}),
    createElement('path', {"d":"M9 18L9 22","key":"1"}),
    createElement('path', {"d":"M12 4L12 9","key":"2"}),
    createElement('path', {"d":"M6 4L6 9","key":"3"}),
    createElement('path', {"d":"M22 2L18 6L22 6L18 11","key":"4"})
  );
});

PlugBolt.displayName = 'PlugBolt';

module.exports = PlugBolt;
module.exports.PlugBolt = PlugBolt;
module.exports.default = PlugBolt;
