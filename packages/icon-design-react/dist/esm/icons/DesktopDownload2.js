import { createElement, forwardRef } from 'react';

const DesktopDownload2 = forwardRef(function DesktopDownload2(
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
    createElement('path', {"d":"M16.974731450033687,5.000000000459295h3c1.104569499661011,0,2,.895430500336261,2,2v12.999999999999091c0,1.10456949966192-.895430500338989,2-2,2H3.974731450033687c-1.104569499661011,0-2-.89543050033808-2-2V7.000000000459295c0-1.104569499663739.895430500338989-2.000000000002728,2-2l3,.000000000002728","key":"0"}),
    createElement('polyline', {"points":"14.974731450033687 9.000000000459295 11.974731449360661 12.000000000459295 8.974731450033687 9.000000000459295","key":"1"}),
    createElement('line', {"x1":"11.974731450033687","y1":"2.000000000459295","x2":"11.974731449360661","y2":"12.000000000459295","key":"2"}),
    createElement('rect', {"x":"5.974731450033687","y":"17.000000000459295","width":"2","height":"1","key":"3"}),
    createElement('rect', {"x":"10.974731450033687","y":"17.000000000459295","width":"2","height":"1","key":"4"}),
    createElement('rect', {"x":"15.974731450033687","y":"17.000000000459295","width":"2","height":"1","key":"5"})
  );
});

DesktopDownload2.displayName = 'DesktopDownload2';

export default DesktopDownload2;
export { DesktopDownload2 };
