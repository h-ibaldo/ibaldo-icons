import { createElement, forwardRef } from 'react';

const LockX = forwardRef(function LockX(
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
    createElement('rect', {"x":"4.025268564681028","y":"10.000000000709406","width":"16","height":"12","rx":"1","ry":"1","key":"0"}),
    createElement('path', {"d":"M17.025268564681028,10.000000000709406v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999995000001945-4.999994999998307h-.000009999999747c-2.761420987728343,0-4.999994999998307,2.238574012269964-4.999994999998307,4.999994999998307v3.000005000001693","key":"1"}),
    createElement('line', {"x1":"10.025268564819271","y1":"18.000000000709406","x2":"14.025268564539147","y2":"13.999999995863618","key":"2"}),
    createElement('line', {"x1":"10.025268564681028","y1":"13.999999996038241","x2":"14.025268564681028","y2":"18.000000000527507","key":"3"})
  );
});

LockX.displayName = 'LockX';

export default LockX;
export { LockX };
