import { createElement, forwardRef } from 'react';

const ArrowDownCircleDashedHalfSmall = forwardRef(function ArrowDownCircleDashedHalfSmall(
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
    createElement('path', {"d":"M5.371 4.52C5.07 4.785 4.789 5.074 4.523 5.371","key":"0"}),
    createElement('path', {"d":"M4.523 18.625C4.789 18.926 5.07 19.215 5.371 19.48","key":"1"}),
    createElement('path', {"d":"M10 2.199C9.602 2.281 9.215 2.395 8.836 2.52","key":"2"}),
    createElement('path', {"d":"M8.836 21.48C9.215 21.605 9.602 21.719 10 21.801","key":"3"}),
    createElement('path', {"d":"M2.207 14C2.289 14.398 2.395 14.785 2.52 15.164","key":"4"}),
    createElement('path', {"d":"M2.52 8.836C2.395 9.215 2.289 9.602 2.207 10","key":"5"}),
    createElement('path', {"d":"M15 13L12 16L9 13","key":"6"}),
    createElement('path', {"d":"M12 8L12 16","key":"7"}),
    createElement('path', {"d":"M14 21.801C18.563 20.871 22 16.84 22 12C22 7.164 18.563 3.129 14 2.199","key":"8"})
  );
});

ArrowDownCircleDashedHalfSmall.displayName = 'ArrowDownCircleDashedHalfSmall';

export default ArrowDownCircleDashedHalfSmall;
export { ArrowDownCircleDashedHalfSmall };
