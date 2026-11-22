import { createElement, forwardRef } from 'react';

const FlipHorizontalInDashed = forwardRef(function FlipHorizontalInDashed(
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
    createElement('path', {"d":"M12 22L12 20","key":"0"}),
    createElement('path', {"d":"M12 16L12 14","key":"1"}),
    createElement('path', {"d":"M12 10L12 8","key":"2"}),
    createElement('path', {"d":"M12 4L12 2","key":"3"}),
    createElement('path', {"d":"M2 8L2 16L7 12Z","key":"4"}),
    createElement('path', {"d":"M22 16L22 8L17 12Z","key":"5"})
  );
});

FlipHorizontalInDashed.displayName = 'FlipHorizontalInDashed';

export default FlipHorizontalInDashed;
export { FlipHorizontalInDashed };
