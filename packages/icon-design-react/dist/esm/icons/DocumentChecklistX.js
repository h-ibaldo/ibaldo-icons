import { createElement, forwardRef } from 'react';

const DocumentChecklistX = forwardRef(function DocumentChecklistX(
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
    createElement('path', {"d":"M22 17L17 22","key":"0"}),
    createElement('path', {"d":"M17 17L22 22","key":"1"}),
    createElement('path', {"d":"M13 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 13","key":"2"}),
    createElement('path', {"d":"M16 7L12 7","key":"3"}),
    createElement('path', {"d":"M16 12L12 12","key":"4"}),
    createElement('path', {"d":"M13 17L12 17","key":"5"}),
    createElement('path', {"d":"M6 7L7 8L9 6","key":"6"}),
    createElement('path', {"d":"M6 12L7 13L9 11","key":"7"}),
    createElement('path', {"d":"M6 17L7 18L9 16","key":"8"})
  );
});

DocumentChecklistX.displayName = 'DocumentChecklistX';

export default DocumentChecklistX;
export { DocumentChecklistX };
