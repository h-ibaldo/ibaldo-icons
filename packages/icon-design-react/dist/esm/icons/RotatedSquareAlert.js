import { createElement, forwardRef } from 'react';

const RotatedSquareAlert = forwardRef(function RotatedSquareAlert(
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
    createElement('rect', {"x":"4.221825375546466","y":"4.219387443179009","width":"15.556349186088269","height":"15.556349186088269","rx":"2.49999999999882","ry":"2.49999999999882","transform":"translate(-4.968838856957838 11.999285914730187) rotate(-44.999999999993044)","key":"0"}),
    createElement('line', {"x1":"11.999999968586053","y1":"16.023095941721294","x2":"11.999999968586053","y2":"16.033095941721513","key":"1"}),
    createElement('line', {"x1":"11.999999968586053","y1":"8.033095941721513","x2":"11.999999968586053","y2":"12.033095941721513","key":"2"})
  );
});

RotatedSquareAlert.displayName = 'RotatedSquareAlert';

export default RotatedSquareAlert;
export { RotatedSquareAlert };
