import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PowerOff = forwardRef(function PowerOff(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M12 3L12 8","key":"0"}),
    createElement(Path, {"d":"M2 2L22 22","key":"1"}),
    createElement(Path, {"d":"M18 7.707C19.246 9.117 20 10.973 20 13C20 13.734 19.902 14.445 19.715 15.121","key":"2"}),
    createElement(Path, {"d":"M18.129 18.141C16.66 19.891 14.461 21 12 21C7.582 21 4 17.418 4 13C4 10.973 4.754 9.117 6 7.707","key":"3"})
  );
});

PowerOff.displayName = 'PowerOff';

export default PowerOff;
export { PowerOff };
