import { createElement, forwardRef } from 'react';

const DocumentListX = forwardRef(function DocumentListX(
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
    createElement('path', {"d":"M11 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 13","key":"0"}),
    createElement('path', {"d":"M7 7L7 7","key":"1"}),
    createElement('path', {"d":"M17 7L11 7","key":"2"}),
    createElement('path', {"d":"M7 12L7 12","key":"3"}),
    createElement('path', {"d":"M17 12L11 12","key":"4"}),
    createElement('path', {"d":"M7 17L7 17","key":"5"}),
    createElement('path', {"d":"M12 17L11 17","key":"6"}),
    createElement('path', {"d":"M20.5 17L15.5 22","key":"7"}),
    createElement('path', {"d":"M15.5 17L20.5 22","key":"8"})
  );
});

DocumentListX.displayName = 'DocumentListX';

export default DocumentListX;
export { DocumentListX };
