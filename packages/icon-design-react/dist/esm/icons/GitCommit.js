import { createElement, forwardRef } from 'react';

const GitCommit = forwardRef(function GitCommit(
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
    createElement('path', {"d":"M9 12C9 10.344 10.344 9 12 9C13.656 9 15 10.344 15 12C15 13.656 13.656 15 12 15C10.344 15 9 13.656 9 12Z","key":"0"}),
    createElement('path', {"d":"M12 9L12 2","key":"1"}),
    createElement('path', {"d":"M12 22L12 15","key":"2"})
  );
});

GitCommit.displayName = 'GitCommit';

export default GitCommit;
export { GitCommit };
