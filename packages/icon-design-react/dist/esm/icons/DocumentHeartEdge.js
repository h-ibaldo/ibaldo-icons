import { createElement, forwardRef } from 'react';

const DocumentHeartEdge = forwardRef(function DocumentHeartEdge(
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
    createElement('path', {"d":"M17 7L7 7","key":"0"}),
    createElement('path', {"d":"M10 12L7 12","key":"1"}),
    createElement('path', {"d":"M9 17L7 17","key":"2"}),
    createElement('path', {"d":"M12 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 10","key":"3"}),
    createElement('path', {"d":"M17 14C15.895 12.895 14.105 12.895 13 14C11.895 15.105 11.895 16.895 13 18L15.586 20.586C16.367 21.367 17.633 21.367 18.414 20.586L21 18C22.105 16.895 22.105 15.105 21 14C19.895 12.895 18.105 12.895 17 14Z","key":"4"})
  );
});

DocumentHeartEdge.displayName = 'DocumentHeartEdge';

export default DocumentHeartEdge;
export { DocumentHeartEdge };
