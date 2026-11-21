'use strict';

const { createElement, forwardRef } = require('react');

const Terminal = forwardRef(function Terminal(
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
    createElement('path', {"d":"M4 6L10 12L4 18","key":"0"}),
    createElement('path', {"d":"M12 18L20 18","key":"1"})
  );
});

Terminal.displayName = 'Terminal';

module.exports = Terminal;
module.exports.Terminal = Terminal;
module.exports.default = Terminal;
