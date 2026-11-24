import { createElement, forwardRef } from 'react';

const BombFuse = forwardRef(function BombFuse(
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
    createElement('path', {"d":"M11 8.293L11 6L7 6L7 8.293C4.109 9.156 2 11.828 2 15C2 18.867 5.133 22 9 22C12.867 22 16 18.867 16 15C16 11.828 13.891 9.156 11 8.293Z","key":"0"}),
    createElement('path', {"d":"M21 8L22 9","key":"1"}),
    createElement('path', {"d":"M21 5L22 4","key":"2"}),
    createElement('path', {"d":"M18 8L17 9","key":"3"}),
    createElement('path', {"d":"M18 5L16.758 3.758C15.633 2.633 14.105 2 12.516 2C10.574 2 9 3.574 9 5.516L9 6","key":"4"})
  );
});

BombFuse.displayName = 'BombFuse';

export default BombFuse;
export { BombFuse };
