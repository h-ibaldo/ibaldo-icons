'use strict';

const { createElement, forwardRef } = require('react');

const NotebookSharp = forwardRef(function NotebookSharp(
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
    createElement('path', {"d":"M20 21L6 21L6 3L20 3Z","key":"0"}),
    createElement('path', {"d":"M4 6L8 6","key":"1"}),
    createElement('path', {"d":"M4 10L8 10","key":"2"}),
    createElement('path', {"d":"M4 14L8 14","key":"3"}),
    createElement('path', {"d":"M4 18L8 18","key":"4"})
  );
});

NotebookSharp.displayName = 'NotebookSharp';

module.exports = NotebookSharp;
module.exports.NotebookSharp = NotebookSharp;
module.exports.default = NotebookSharp;
