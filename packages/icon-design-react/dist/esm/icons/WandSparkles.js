import { createElement, forwardRef } from 'react';

const WandSparkles = forwardRef(function WandSparkles(
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
    createElement('path', {"d":"M5.5 3L5.5 8","key":"0"}),
    createElement('path', {"d":"M8 5.5L3 5.5","key":"1"}),
    createElement('path', {"d":"M20.5 13L20.5 16","key":"2"}),
    createElement('path', {"d":"M22 14.5L19 14.5","key":"3"}),
    createElement('path', {"d":"M16.5 19L16.5 22","key":"4"}),
    createElement('path', {"d":"M18 20.5L15 20.5","key":"5"}),
    createElement('path', {"d":"M18.816 2.816L20.23 4.23C20.66 4.66 20.672 5.352 20.258 5.789L5.789 21.16C5.359 21.621 4.629 21.629 4.184 21.184L2.77 19.77C2.34 19.34 2.328 18.648 2.742 18.211L17.211 2.84C17.641 2.379 18.371 2.371 18.816 2.816Z","key":"6"}),
    createElement('path', {"d":"M13.152 7.152L16.152 10.152","key":"7"})
  );
});

WandSparkles.displayName = 'WandSparkles';

export default WandSparkles;
export { WandSparkles };
