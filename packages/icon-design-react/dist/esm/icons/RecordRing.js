import { createElement, forwardRef } from 'react';

const RecordRing = forwardRef(function RecordRing(
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
    createElement('path', {"d":"M16 12C16 8.133 12.867 5 9 5C5.133 5 2 8.133 2 12C2 15.867 5.133 19 9 19C12.867 19 16 15.867 16 12Z","key":"0"}),
    createElement('path', {"d":"M19.941 19C21.238 16.98 22 14.578 22 12C22 9.422 21.238 7.023 19.941 5","key":"1"})
  );
});

RecordRing.displayName = 'RecordRing';

export default RecordRing;
export { RecordRing };
