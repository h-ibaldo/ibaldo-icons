import { createElement, forwardRef } from 'react';

const LinkCircleWide = forwardRef(function LinkCircleWide(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M16.5 11.5L17.086 10.914C17.867 10.133 17.867 8.867 17.086 8.086L15.914 6.914C15.133 6.133 13.867 6.133 13.086 6.914L10.828 9.172C9.723 10.277 9.723 12.066 10.828 13.172","key":"1"}),
    createElement('path', {"d":"M7.5 12.5L6.914 13.086C6.133 13.867 6.133 15.133 6.914 15.914L8.086 17.086C8.867 17.867 10.133 17.867 10.914 17.086L13.172 14.828C14.277 13.723 14.277 11.934 13.172 10.828","key":"2"})
  );
});

LinkCircleWide.displayName = 'LinkCircleWide';

export default LinkCircleWide;
export { LinkCircleWide };
