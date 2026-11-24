'use strict';

const { createElement, forwardRef } = require('react');

const GitCommitHorizontal = forwardRef(function GitCommitHorizontal(
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
    createElement('path', {"d":"M12 9C13.656 9 15 10.344 15 12C15 13.656 13.656 15 12 15C10.344 15 9 13.656 9 12C9 10.344 10.344 9 12 9Z","key":"0"}),
    createElement('path', {"d":"M15 12L22 12","key":"1"}),
    createElement('path', {"d":"M2 12L9 12","key":"2"})
  );
});

GitCommitHorizontal.displayName = 'GitCommitHorizontal';

module.exports = GitCommitHorizontal;
module.exports.GitCommitHorizontal = GitCommitHorizontal;
module.exports.default = GitCommitHorizontal;
