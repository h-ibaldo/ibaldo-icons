import { createElement, forwardRef } from 'react';

const LockKeyholeDotNarrow = forwardRef(function LockKeyholeDotNarrow(
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
    createElement('circle', {"cx":"11.949462885139837","cy":"16.000000000480213","r":"1","key":"0"}),
    createElement('rect', {"x":"4.949462885139837","y":"10.000000000480213","width":"14","height":"12","rx":"1","ry":"1","key":"1"}),
    createElement('path', {"d":"M16.949462885139837,10.000000000480213v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999995000000126-4.999994999998307h-.000009999999747c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999994999998307v3.000005000001693","key":"2"})
  );
});

LockKeyholeDotNarrow.displayName = 'LockKeyholeDotNarrow';

export default LockKeyholeDotNarrow;
export { LockKeyholeDotNarrow };
