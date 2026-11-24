'use strict';

const { createElement, forwardRef } = require('react');

const Plug = forwardRef(function Plug(
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
    createElement('path', {"d":"M6 8L18 8L18 12C18 14.762 15.762 17 13 17L11 17C8.238 17 6 14.762 6 12Z","key":"0"}),
    createElement('path', {"d":"M12 17L12 21","key":"1"}),
    createElement('path', {"d":"M15 3L15 8","key":"2"}),
    createElement('path', {"d":"M9 3L9 8","key":"3"})
  );
});

Plug.displayName = 'Plug';

module.exports = Plug;
module.exports.Plug = Plug;
module.exports.default = Plug;
