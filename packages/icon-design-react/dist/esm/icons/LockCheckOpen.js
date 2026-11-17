import { createElement, forwardRef } from 'react';

const LockCheckOpen = forwardRef(function LockCheckOpen(
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
    createElement('path', {"d":"M3.067167566010539,12.056394887018541v-6.000003997516615c0-2.209136791556375,1.790859210928829-3.999996002483385,3.999996002479747-3.999996002483385h.000008000009984c2.209136796709572,0,3.999996009779352,1.790859218992409,3.999996002479747,3.999996015711076l-.000000019850631,7.000003984288924","key":"0"}),
    createElement('polyline', {"points":"16.067167566010539 20.056394887018541 18.067167566010539 22.056394887018541 22.067167566010539 18.056394887018541","key":"1"}),
    createElement('polyline', {"points":"13.067167566010539 22.056394887018541 9.067167566010539 22.056394887018541 9.067167566010539 13.056394887018541 21.067167566010539 13.056394887018541 21.067167566010539 15.056394887018541","key":"2"})
  );
});

LockCheckOpen.displayName = 'LockCheckOpen';

export default LockCheckOpen;
export { LockCheckOpen };
