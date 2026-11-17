import { createElement, forwardRef } from 'react';

const LockEyeNarrow = forwardRef(function LockEyeNarrow(
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
    createElement('rect', {"x":"4.999999990599463","y":"10.000000005169568","width":"14","height":"12","rx":"1","ry":"1","key":"0"}),
    createElement('circle', {"cx":"11.999999990599463","cy":"16.000000005168658","r":"2.999999999999545","key":"1"}),
    createElement('path', {"d":"M16.999999990599463,10.000000005169568v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999994999999217-4.999994999998307h-.000010000000657c-2.761420987729252,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999994999998307v3.000005000001693","key":"2"}),
    createElement('polyline', {"points":"12.999999990599463 13.183715825482068 12.999999990599463 15.000000005169568 14.816284170299696 15.000000005169568","key":"3"})
  );
});

LockEyeNarrow.displayName = 'LockEyeNarrow';

export default LockEyeNarrow;
export { LockEyeNarrow };
