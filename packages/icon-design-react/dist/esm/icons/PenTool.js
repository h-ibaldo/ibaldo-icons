import { createElement, forwardRef } from 'react';

const PenTool = forwardRef(function PenTool(
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
    createElement('path', {"d":"M2 2L12 12","key":"0"}),
    createElement('path', {"d":"M2 2L5.543 15.293C5.824 16.348 6.656 17.164 7.715 17.43L14 19L19 14L17.43 7.715C17.164 6.656 16.344 5.824 15.293 5.543Z","key":"1"}),
    createElement('path', {"d":"M11 12C11 11.449 11.449 11 12 11C12.551 11 13 11.449 13 12C13 12.551 12.551 13 12 13C11.449 13 11 12.551 11 12Z","key":"2"}),
    createElement('path', {"d":"M16 21L21 16L22 17L17 22Z","key":"3"})
  );
});

PenTool.displayName = 'PenTool';

export default PenTool;
export { PenTool };
