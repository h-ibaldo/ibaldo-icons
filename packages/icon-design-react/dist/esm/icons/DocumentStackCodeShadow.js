import { createElement, forwardRef } from 'react';

const DocumentStackCodeShadow = forwardRef(function DocumentStackCodeShadow(
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
    createElement('path', {"d":"M8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L18 6C19.105 6 20 6.895 20 8L20 10","key":"0"}),
    createElement('path', {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L14 2","key":"1"}),
    createElement('path', {"d":"M17 14L15 20","key":"2"}),
    createElement('path', {"d":"M20 15L22 17L20 19","key":"3"}),
    createElement('path', {"d":"M12 15L10 17L12 19","key":"4"})
  );
});

DocumentStackCodeShadow.displayName = 'DocumentStackCodeShadow';

export default DocumentStackCodeShadow;
export { DocumentStackCodeShadow };
