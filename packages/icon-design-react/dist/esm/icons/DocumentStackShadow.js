import { createElement, forwardRef } from 'react';

const DocumentStackShadow = forwardRef(function DocumentStackShadow(
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
    createElement('rect', {"x":"7","y":"6","width":"14","height":"16","rx":"1","ry":"1","key":"0"}),
    createElement('path', {"d":"M16,2H4c-.552284749830505,0-1,.447715250171314-1,1v14","key":"1"}),
    createElement('line', {"x1":"11","y1":"10","x2":"17","y2":"10","key":"2"}),
    createElement('line', {"x1":"11","y1":"14","x2":"17","y2":"14","key":"3"}),
    createElement('line', {"x1":"11","y1":"18","x2":"17","y2":"18","key":"4"})
  );
});

DocumentStackShadow.displayName = 'DocumentStackShadow';

export default DocumentStackShadow;
export { DocumentStackShadow };
