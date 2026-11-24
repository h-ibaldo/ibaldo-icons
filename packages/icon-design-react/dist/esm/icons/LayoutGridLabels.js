import { createElement, forwardRef } from 'react';

const LayoutGridLabels = forwardRef(function LayoutGridLabels(
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
    createElement('rect', {"x":"1.999999994000973","y":"1.998779299956368","width":"7","height":"5","rx":"1","ry":"1","key":"0"}),
    createElement('line', {"x1":"1.999999994000973","y1":"9.998779299956368","x2":"8.999999994000973","y2":"9.998779299956368","key":"1"}),
    createElement('rect', {"x":"14.999999994000973","y":"1.998779299956368","width":"7","height":"5","rx":"1","ry":"1","key":"2"}),
    createElement('line', {"x1":"14.999999994000973","y1":"9.998779299956368","x2":"21.999999994000973","y2":"9.998779299956368","key":"3"}),
    createElement('rect', {"x":"1.999999994000973","y":"13.99877929995273","width":"7","height":"5","rx":"1","ry":"1","key":"4"}),
    createElement('line', {"x1":"1.999999994000973","y1":"21.998779299956368","x2":"8.999999994000973","y2":"21.998779299956368","key":"5"}),
    createElement('rect', {"x":"14.999999994000973","y":"13.99877929995273","width":"7","height":"5","rx":"1","ry":"1","key":"6"}),
    createElement('line', {"x1":"14.999999994000973","y1":"21.998779299956368","x2":"21.999999994000973","y2":"21.998779299956368","key":"7"})
  );
});

LayoutGridLabels.displayName = 'LayoutGridLabels';

export default LayoutGridLabels;
export { LayoutGridLabels };
