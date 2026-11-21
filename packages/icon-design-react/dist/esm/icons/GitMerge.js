import { createElement, forwardRef } from 'react';

const GitMerge = forwardRef(function GitMerge(
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
    createElement('path', {"d":"M3 6C3 7.656 4.344 9 6 9C7.656 9 9 7.656 9 6C9 4.344 7.656 3 6 3C4.344 3 3 4.344 3 6Z","key":"0"}),
    createElement('path', {"d":"M15 18C15 19.656 16.344 21 18 21C19.656 21 21 19.656 21 18C21 16.344 19.656 15 18 15C16.344 15 15 16.344 15 18Z","key":"1"}),
    createElement('path', {"d":"M6 9L6 21","key":"2"}),
    createElement('path', {"d":"M6 9C6 13.969 10.031 18 15 18","key":"3"})
  );
});

GitMerge.displayName = 'GitMerge';

export default GitMerge;
export { GitMerge };
