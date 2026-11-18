import { createElement, forwardRef } from 'react';

const LinkCircleCheckShort = forwardRef(function LinkCircleCheckShort(
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
    createElement('path', {"d":"M21.801 14C21.93 13.355 22 12.688 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.684 22 13.352 21.93 14 21.801","key":"0"}),
    createElement('path', {"d":"M17 19L19 21L22 18","key":"1"}),
    createElement('path', {"d":"M15.172 12.828C16.277 11.723 16.277 9.934 15.172 8.828C14.066 7.723 12.277 7.723 11.172 8.828","key":"2"}),
    createElement('path', {"d":"M8.828 11.172C7.723 12.277 7.723 14.066 8.828 15.172C9.934 16.277 11.723 16.277 12.828 15.172","key":"3"}),
    createElement('path', {"d":"M11.328 12.672L12.672 11.328","key":"4"})
  );
});

LinkCircleCheckShort.displayName = 'LinkCircleCheckShort';

export default LinkCircleCheckShort;
export { LinkCircleCheckShort };
