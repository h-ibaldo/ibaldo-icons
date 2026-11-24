import { createElement, forwardRef } from 'react';

const AlignCenterVerticalSplit = forwardRef(function AlignCenterVerticalSplit(
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
    createElement('path', {"d":"M12 2L12 22","key":"0"}),
    createElement('path', {"d":"M15 14L19 14C19.551 14 20 14.449 20 15L20 19C20 19.551 19.551 20 19 20L15 20","key":"1"}),
    createElement('path', {"d":"M9 20L5 20C4.449 20 4 19.551 4 19L4 15C4 14.449 4.449 14 5 14L9 14","key":"2"}),
    createElement('path', {"d":"M15 4L21 4C21.551 4 22 4.449 22 5L22 9C22 9.551 21.551 10 21 10L15 10","key":"3"}),
    createElement('path', {"d":"M9 10L3 10C2.449 10 2 9.551 2 9L2 5C2 4.449 2.449 4 3 4L9 4","key":"4"})
  );
});

AlignCenterVerticalSplit.displayName = 'AlignCenterVerticalSplit';

export default AlignCenterVerticalSplit;
export { AlignCenterVerticalSplit };
