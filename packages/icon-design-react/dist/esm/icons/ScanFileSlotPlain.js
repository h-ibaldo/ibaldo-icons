import { createElement, forwardRef } from 'react';

const ScanFileSlotPlain = forwardRef(function ScanFileSlotPlain(
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
    createElement('path', {"d":"M8 11L16 11","key":"0"}),
    createElement('path', {"d":"M8 7L10 7","key":"1"}),
    createElement('path', {"d":"M2 16L22 16","key":"2"}),
    createElement('path', {"d":"M4 16L4 3C4 2.448 4.448 2 5 2L19 2C19.552 2 20 2.448 20 3L20 16","key":"3"}),
    createElement('path', {"d":"M20 20L20 21C20 21.552 19.552 22 19 22L5 22C4.448 22 4 21.552 4 21L4 20","key":"4"})
  );
});

ScanFileSlotPlain.displayName = 'ScanFileSlotPlain';

export default ScanFileSlotPlain;
export { ScanFileSlotPlain };
