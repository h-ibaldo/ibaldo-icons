import { createElement, forwardRef } from 'react';

const GripBarsVertical = forwardRef(function GripBarsVertical(
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
    createElement('line', {"x1":"17.025268558149946","y1":"1.998782736171052","x2":"17.025268558149946","y2":"21.998782736171052","key":"0"}),
    createElement('line', {"x1":"12.025268558149946","y1":"1.998782736171052","x2":"12.025268558149946","y2":"21.998782736171052","key":"1"}),
    createElement('line', {"x1":"7.025268558149946","y1":"1.998782736171052","x2":"7.025268558149946","y2":"21.998782736171052","key":"2"})
  );
});

GripBarsVertical.displayName = 'GripBarsVertical';

export default GripBarsVertical;
export { GripBarsVertical };
