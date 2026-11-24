'use strict';

const { createElement, forwardRef } = require('react');

const CopyrightCompact = forwardRef(function CopyrightCompact(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M15 9.379C14.266 8.543 13.203 8 12 8C9.789 8 8 9.793 8 12C8 14.211 9.789 16 12 16C13.203 16 14.266 15.461 15 14.621","key":"1"})
  );
});

CopyrightCompact.displayName = 'CopyrightCompact';

module.exports = CopyrightCompact;
module.exports.CopyrightCompact = CopyrightCompact;
module.exports.default = CopyrightCompact;
