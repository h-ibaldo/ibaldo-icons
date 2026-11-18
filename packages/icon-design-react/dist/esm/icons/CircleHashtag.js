import { createElement, forwardRef } from 'react';

const CircleHashtag = forwardRef(function CircleHashtag(
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
    createElement('path', {"d":"M16 22L17 14","key":"0"}),
    createElement('path', {"d":"M20 22L21 14","key":"1"}),
    createElement('path', {"d":"M15 16L22 16","key":"2"}),
    createElement('path', {"d":"M15 20L22 20","key":"3"}),
    createElement('path', {"d":"M21.797 10C20.871 5.438 16.836 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22","key":"4"})
  );
});

CircleHashtag.displayName = 'CircleHashtag';

export default CircleHashtag;
export { CircleHashtag };
