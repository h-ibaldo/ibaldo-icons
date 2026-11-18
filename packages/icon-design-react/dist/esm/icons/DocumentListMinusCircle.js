import { createElement, forwardRef } from 'react';

const DocumentListMinusCircle = forwardRef(function DocumentListMinusCircle(
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
    createElement('path', {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z","key":"0"}),
    createElement('path', {"d":"M19 17L15 17","key":"1"}),
    createElement('path', {"d":"M9 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 9","key":"2"}),
    createElement('path', {"d":"M6 7L6 7","key":"3"}),
    createElement('path', {"d":"M16 7L9 7","key":"4"}),
    createElement('path', {"d":"M6 12L6 12","key":"5"}),
    createElement('path', {"d":"M17 12L9 12","key":"6"}),
    createElement('path', {"d":"M6 17L6 17","key":"7"}),
    createElement('path', {"d":"M12 17L9 17","key":"8"})
  );
});

DocumentListMinusCircle.displayName = 'DocumentListMinusCircle';

export default DocumentListMinusCircle;
export { DocumentListMinusCircle };
