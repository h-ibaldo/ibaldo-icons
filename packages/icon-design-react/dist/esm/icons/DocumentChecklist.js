import { createElement, forwardRef } from 'react';

const DocumentChecklist = forwardRef(function DocumentChecklist(
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
    createElement('path', {"d":"M19 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 20C21 21.105 20.105 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M17 7L13 7","key":"1"}),
    createElement('path', {"d":"M17 12L13 12","key":"2"}),
    createElement('path', {"d":"M17 17L13 17","key":"3"}),
    createElement('path', {"d":"M7 7L8 8L10 6","key":"4"}),
    createElement('path', {"d":"M7 12L8 13L10 11","key":"5"}),
    createElement('path', {"d":"M7 17L8 18L10 16","key":"6"})
  );
});

DocumentChecklist.displayName = 'DocumentChecklist';

export default DocumentChecklist;
export { DocumentChecklist };
