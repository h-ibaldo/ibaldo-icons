import { createElement, forwardRef } from 'react';

const ArrowDownDiamond = forwardRef(function ArrowDownDiamond(
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
    createElement('rect', {"x":"4.221825375546285","y":"4.219387443182239","width":"15.556349186088632","height":"15.556349186088632","rx":"2.499999999998875","ry":"2.499999999998875","transform":"translate(-4.96883885696025 11.999285914731155) rotate(-44.999999999992944)","key":"0"}),
    createElement('line', {"x1":"12.071067780476369","y1":"14.997562036226554","x2":"12.071067780476369","y2":"7.997562036226554","key":"1"}),
    createElement('polyline', {"points":"9.071067780476369 12.997562036226554 12.071067780476369 15.997562036226554 15.071067780476369 12.997562036226554","key":"2"})
  );
});

ArrowDownDiamond.displayName = 'ArrowDownDiamond';

export default ArrowDownDiamond;
export { ArrowDownDiamond };
