import { createElement, forwardRef } from 'react';

const CursorRipple = forwardRef(function CursorRipple(
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
    createElement('path', {"d":"M20.016 12.223L9.859 9.238C9.48 9.125 9.125 9.48 9.238 9.859L12.223 20.016C12.344 20.414 12.867 20.504 13.113 20.164L14.871 17.699L18.172 21L21 18.172L17.699 14.871L20.164 13.113C20.504 12.871 20.414 12.344 20.016 12.223Z","key":"0"}),
    createElement('path', {"d":"M14.191 6C13.152 4.207 11.219 3 9 3C5.688 3 3 5.688 3 9C3 11.219 4.207 13.152 6 14.191","key":"1"})
  );
});

CursorRipple.displayName = 'CursorRipple';

export default CursorRipple;
export { CursorRipple };
