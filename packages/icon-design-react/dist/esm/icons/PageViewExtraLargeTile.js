import { createElement, forwardRef } from 'react';

const PageViewExtraLargeTile = forwardRef(function PageViewExtraLargeTile(
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
    createElement('rect', {"x":"9.000000000776865","y":"8.998779293414614","width":"1.999999999939774","height":"1.999999998869015","rx":".999998993246465","ry":".999998993246465","key":"0"}),
    createElement('rect', {"x":"1.999999993642632","y":"1.998779299956368","width":"20","height":"20","rx":"1","ry":"1","key":"1"}),
    createElement('rect', {"x":"5.999999993642632","y":"5.998779299956368","width":"12","height":"12","rx":"1","ry":"1","key":"2"}),
    createElement('path', {"d":"M17.999999993642632,10.998779299956368c-3.865993248600716,0-7,3.134006751399284-7,7","key":"3"})
  );
});

PageViewExtraLargeTile.displayName = 'PageViewExtraLargeTile';

export default PageViewExtraLargeTile;
export { PageViewExtraLargeTile };
