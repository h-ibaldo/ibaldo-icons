import { createElement, forwardRef } from 'react';

const LinkSquareShort = forwardRef(function LinkSquareShort(
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
    createElement('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement('path', {"d":"M15.172 12.828C16.277 11.723 16.277 9.934 15.172 8.828C14.066 7.723 12.277 7.723 11.172 8.828","key":"1"}),
    createElement('path', {"d":"M8.828 11.172C7.723 12.277 7.723 14.066 8.828 15.172C9.934 16.277 11.723 16.277 12.828 15.172","key":"2"}),
    createElement('path', {"d":"M11.328 12.672L12.672 11.328","key":"3"})
  );
});

LinkSquareShort.displayName = 'LinkSquareShort';

export default LinkSquareShort;
export { LinkSquareShort };
