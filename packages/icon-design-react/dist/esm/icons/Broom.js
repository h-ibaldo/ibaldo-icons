import { createElement, forwardRef } from 'react';

const Broom = forwardRef(function Broom(
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
    createElement('path', {"d":"M19 13L5 13L3 22L21 22Z","key":"0"}),
    createElement('path', {"d":"M15 22L15 18","key":"1"}),
    createElement('path', {"d":"M9 22L9 19","key":"2"}),
    createElement('path', {"d":"M20 11L20 13L4 13L4 11C4 9.895 4.895 9 6 9L10 9L10 4C10 2.895 10.895 2 12 2C13.105 2 14 2.895 14 4L14 9L18 9C19.105 9 20 9.895 20 11Z","key":"3"})
  );
});

Broom.displayName = 'Broom';

export default Broom;
export { Broom };
