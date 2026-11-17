import { createElement, forwardRef } from 'react';

const BrowserSidebar = forwardRef(function BrowserSidebar(
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
    createElement('rect', {"x":"1.999999993990059","y":"1.998779299956368","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"1.999999993990059","y1":"7.998779299956368","x2":"21.999999993990059","y2":"7.998779299956368","key":"1"}),
    createElement('line', {"x1":"5.009999993990277","y1":"4.998779299956368","x2":"4.999999993990059","y2":"4.998779299956368","key":"2"}),
    createElement('line', {"x1":"8.009999993990277","y1":"4.998779299956368","x2":"7.999999993990059","y2":"4.998779299956368","key":"3"}),
    createElement('line', {"x1":"17.999999993990059","y1":"4.998779299956368","x2":"11.999999993990059","y2":"4.998779299956368","key":"4"}),
    createElement('line', {"x1":"17.999999993990059","y1":"12.998779299956368","x2":"12.999999993990059","y2":"12.998779299956368","key":"5"}),
    createElement('line', {"x1":"17.999999993990059","y1":"16.998779299956368","x2":"12.999999993990059","y2":"16.998779299956368","key":"6"}),
    createElement('line', {"x1":"8.999999993990059","y1":"7.998779299956368","x2":"8.999999993990059","y2":"21.998779299956368","key":"7"})
  );
});

BrowserSidebar.displayName = 'BrowserSidebar';

export default BrowserSidebar;
export { BrowserSidebar };
