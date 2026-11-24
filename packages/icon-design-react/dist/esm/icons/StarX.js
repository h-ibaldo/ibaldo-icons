import { createElement, forwardRef } from 'react';

const StarX = forwardRef(function StarX(
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
    createElement('path', {"d":"M16 3L20 7M20 3L16 7","key":"0"}),
    createElement('path', {"d":"M21.484 11.039L16.805 14.438L18.594 19.938C18.965 21.082 17.652 22.039 16.68 21.328L12 17.93L7.32 21.328C6.348 22.039 5.035 21.082 5.406 19.938L7.195 14.438L2.516 11.039C1.539 10.332 2.043 8.789 3.246 8.789L9.031 8.789L10.816 3.289","key":"1"})
  );
});

StarX.displayName = 'StarX';

export default StarX;
export { StarX };
