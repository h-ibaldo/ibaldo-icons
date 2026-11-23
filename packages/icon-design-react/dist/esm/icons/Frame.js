import { createElement, forwardRef } from 'react';

const Frame = forwardRef(function Frame(
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
    createElement('path', {"d":"M2 6L22 6","key":"0"}),
    createElement('path', {"d":"M2 18L22 18","key":"1"}),
    createElement('path', {"d":"M6 22L6 2","key":"2"}),
    createElement('path', {"d":"M18 22L18 2","key":"3"})
  );
});

Frame.displayName = 'Frame';

export default Frame;
export { Frame };
