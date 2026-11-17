import { createElement, forwardRef } from 'react';

const VolumeOff = forwardRef(function VolumeOff(
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
    createElement('path', {"d":"M22 19L2 5","key":"0"}),
    createElement('path', {"d":"M6.285 8L6 8C5.449 8 5 8.445 5 9L5 15C5 15.555 5.449 16 6 16L10 16L17.445 20.965C18.109 21.406 19 20.93 19 20.133L19 16.898","key":"1"}),
    createElement('path', {"d":"M19 11.801L19 3.867C19 3.07 18.109 2.594 17.445 3.035L11.828 6.781","key":"2"})
  );
});

VolumeOff.displayName = 'VolumeOff';

export default VolumeOff;
export { VolumeOff };
