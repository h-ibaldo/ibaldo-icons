import { createElement, forwardRef } from 'react';

const GitBranchPlus = forwardRef(function GitBranchPlus(
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
    createElement('path', {"d":"M3 18C3 16.344 4.344 15 6 15C7.656 15 9 16.344 9 18C9 19.656 7.656 21 6 21C4.344 21 3 19.656 3 18Z","key":"0"}),
    createElement('path', {"d":"M15 6C15 4.344 16.344 3 18 3C19.656 3 21 4.344 21 6C21 7.656 19.656 9 18 9C16.344 9 15 7.656 15 6Z","key":"1"}),
    createElement('path', {"d":"M6 15L6 3","key":"2"}),
    createElement('path', {"d":"M6 15C6 10.031 10.031 6 15 6","key":"3"}),
    createElement('path', {"d":"M21 18L15 18","key":"4"}),
    createElement('path', {"d":"M18 21L18 15","key":"5"})
  );
});

GitBranchPlus.displayName = 'GitBranchPlus';

export default GitBranchPlus;
export { GitBranchPlus };
