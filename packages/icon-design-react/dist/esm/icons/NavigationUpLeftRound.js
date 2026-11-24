import { createElement, forwardRef } from 'react';

const NavigationUpLeftRound = forwardRef(function NavigationUpLeftRound(
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
    createElement('path', {"d":"M5.617 3.082L19.512 7.051C21.422 7.598 21.52 10.27 19.652 10.949L14.453 12.84C13.703 13.113 13.113 13.703 12.84 14.457L10.949 19.648C10.273 21.52 7.598 21.426 7.051 19.512L3.082 5.617C2.641 4.07 4.07 2.641 5.617 3.082Z","key":"0"})
  );
});

NavigationUpLeftRound.displayName = 'NavigationUpLeftRound';

export default NavigationUpLeftRound;
export { NavigationUpLeftRound };
