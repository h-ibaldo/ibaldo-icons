import { createElement, forwardRef } from 'react';

const WarningCircle = forwardRef(function WarningCircle(
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
    createElement('circle', {"cx":"12.000000005000402","cy":"12.000000003886953","r":"8.000000000000341","key":"0"}),
    createElement('line', {"x1":"12.000000005000402","y1":"15.010000003887399","x2":"12.000000005000402","y2":"15.000000003886271","key":"1"}),
    createElement('line', {"x1":"12.000000005000402","y1":"9.000000003886271","x2":"12.000000005000402","y2":"12.000000003886271","key":"2"})
  );
});

WarningCircle.displayName = 'WarningCircle';

export default WarningCircle;
export { WarningCircle };
