import { createElement, forwardRef } from 'react';

const MusicNoteFlagRound = forwardRef(function MusicNoteFlagRound(
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
    createElement('ellipse', {"cx":"8","cy":"18.499999999998181","rx":"4","ry":"3.5","key":"0"}),
    createElement('path', {"d":"M12,6.999999999998181l8,2v-1.876894374379845c0-1.835470567519224-1.249189494539678-3.435402999260987-3.029857499859645-3.88057000057961l-4.970142500140355-1.242535625040546v16","key":"1"})
  );
});

MusicNoteFlagRound.displayName = 'MusicNoteFlagRound';

export default MusicNoteFlagRound;
export { MusicNoteFlagRound };
