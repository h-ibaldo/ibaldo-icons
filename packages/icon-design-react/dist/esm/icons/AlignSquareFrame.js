import { createElement, forwardRef } from 'react';

const AlignSquareFrame = forwardRef(function AlignSquareFrame(
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
    createElement('path', {"d":"M8 14L8 10C8 8.895 8.895 8 10 8L14 8C15.105 8 16 8.895 16 10L16 14C16 15.105 15.105 16 14 16L10 16C8.895 16 8 15.105 8 14Z","key":"0"}),
    createElement('path', {"d":"M5 2L19 2","key":"1"}),
    createElement('path', {"d":"M5 22L19 22","key":"2"}),
    createElement('path', {"d":"M22 5L22 19","key":"3"}),
    createElement('path', {"d":"M2 5L2 19","key":"4"})
  );
});

AlignSquareFrame.displayName = 'AlignSquareFrame';

export default AlignSquareFrame;
export { AlignSquareFrame };
