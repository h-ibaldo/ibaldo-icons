import { createElement, forwardRef } from 'react';

const LockCheckNarrow = forwardRef(function LockCheckNarrow(
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
    createElement('rect', {"x":"4.974731450040053","y":"10.000000003885361","width":"14","height":"12","rx":"1","ry":"1","key":"0"}),
    createElement('path', {"d":"M16.974731450040053,10.000000003885361v-3.000004999998055c0-2.761420987731981-2.238574012269964-4.999995000001945-4.999994999989212-4.999995000001945h-.000009999999747c-2.761420987741076,0-4.99999500001104,2.238574012269964-4.99999500001104,4.999995000001945v3.000004999998055","key":"1"}),
    createElement('polyline', {"points":"8.974731450040053 16.000000010033546 10.974731450040053 18.000000003703462 14.974731450040053 14.000000003885361","key":"2"})
  );
});

LockCheckNarrow.displayName = 'LockCheckNarrow';

export default LockCheckNarrow;
export { LockCheckNarrow };
