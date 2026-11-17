import { createElement, forwardRef } from 'react';

const OptionsCheckInfo = forwardRef(function OptionsCheckInfo(
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
    createElement('path', {"d":"M16 22C12.688 22 10 19.313 10 16C10 12.688 12.688 10 16 10C19.313 10 22 12.688 22 16C22 19.313 19.313 22 16 22Z","key":"0"}),
    createElement('path', {"d":"M16 13.5L16 13.5","key":"1"}),
    createElement('path', {"d":"M16 16.5L16 18.5","key":"2"}),
    createElement('path', {"d":"M5.852 7.5L6.949 8.602L9.148 6.398","key":"3"}),
    createElement('path', {"d":"M12.973 7C12.723 4.195 10.367 2 7.5 2C4.461 2 2 4.461 2 7.5C2 10.367 4.199 12.723 7 12.977","key":"4"})
  );
});

OptionsCheckInfo.displayName = 'OptionsCheckInfo';

export default OptionsCheckInfo;
export { OptionsCheckInfo };
