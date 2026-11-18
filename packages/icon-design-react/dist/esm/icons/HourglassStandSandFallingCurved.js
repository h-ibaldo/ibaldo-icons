import { createElement, forwardRef } from 'react';

const HourglassStandSandFallingCurved = forwardRef(function HourglassStandSandFallingCurved(
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
    createElement('path', {"d":"M10 19L14 19","key":"0"}),
    createElement('path', {"d":"M12 8L12 8","key":"1"}),
    createElement('path', {"d":"M6 22L6 18.906C6 18.316 6.176 17.738 6.504 17.242L8.891 13.664C9.563 12.656 9.563 11.344 8.891 10.336L6.504 6.758C6.176 6.262 6 5.684 6 5.094L6 2","key":"2"}),
    createElement('path', {"d":"M19 22L5 22","key":"3"}),
    createElement('path', {"d":"M18 2L18 5.094C18 5.684 17.824 6.262 17.496 6.758L15.109 10.336C14.438 11.344 14.438 12.656 15.109 13.664L17.496 17.242C17.824 17.738 18 18.316 18 18.906L18 22","key":"4"}),
    createElement('path', {"d":"M5 2L19 2","key":"5"})
  );
});

HourglassStandSandFallingCurved.displayName = 'HourglassStandSandFallingCurved';

export default HourglassStandSandFallingCurved;
export { HourglassStandSandFallingCurved };
