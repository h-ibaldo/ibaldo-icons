'use strict';

const { createElement, forwardRef } = require('react');

const GitMergeBend = forwardRef(function GitMergeBend(
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
    createElement('path', {"d":"M18.063 15C19.719 15 21.063 16.344 21.063 18C21.063 19.656 19.719 21 18.063 21C16.406 21 15.063 19.656 15.063 18C15.063 16.344 16.406 15 18.063 15Z","key":"0"}),
    createElement('path', {"d":"M6 9C4.344 9 3 7.656 3 6C3 4.344 4.344 3 6 3C7.656 3 9 4.344 9 6C9 7.656 7.656 9 6 9Z","key":"1"}),
    createElement('path', {"d":"M18.063 15L18.063 8C18.063 6.895 17.168 6 16.063 6L13 6","key":"2"}),
    createElement('path', {"d":"M6 9L6 16C6 17.105 6.895 18 8 18L11.063 18","key":"3"})
  );
});

GitMergeBend.displayName = 'GitMergeBend';

module.exports = GitMergeBend;
module.exports.GitMergeBend = GitMergeBend;
module.exports.default = GitMergeBend;
