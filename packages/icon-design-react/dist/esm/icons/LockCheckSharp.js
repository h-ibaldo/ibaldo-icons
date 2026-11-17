import { createElement, forwardRef } from 'react';

const LockCheckSharp = forwardRef(function LockCheckSharp(
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
    createElement('polyline', {"points":"10.067167566010539 22.056394887018541 5.067167566010539 22.056394887018541 5.067167566010539 13.056394887018541 17.067167566010539 13.056394887018541 17.067167566010539 15.056394887018541","key":"0"}),
    createElement('path', {"d":"M7.067167561050155,13.056394887018541v-7.000003997516615c0-2.209136791556375,1.790859210919734-3.999996002483385,3.999996002479747-3.999996002483385h.00000799999907c2.209136796720486,0,3.99999600980118,1.790859218992409,3.999996002481566,3.999996015711076l-.000000019850631,7.000003984288924","key":"1"}),
    createElement('polyline', {"points":"14.067167566010539 20.056394887018541 16.067167566010539 22.056394887018541 20.067167566010539 18.056394887018541","key":"2"})
  );
});

LockCheckSharp.displayName = 'LockCheckSharp';

export default LockCheckSharp;
export { LockCheckSharp };
