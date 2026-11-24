import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GaugeTicksSplit = forwardRef(function GaugeTicksSplit(
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
    createElement(Path, {"d":"M18 12L22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12L6 12","key":"0"}),
    createElement(Path, {"d":"M13.926 12.535C14.223 11.473 13.602 10.371 12.535 10.074C11.473 9.777 10.371 10.398 10.074 11.465C9.777 12.527 10.398 13.629 11.461 13.926C12.527 14.223 13.629 13.602 13.926 12.535Z","key":"1"}),
    createElement(Path, {"d":"M12 2L12 5","key":"2"}),
    createElement(Path, {"d":"M7 7L5 5","key":"3"}),
    createElement(Path, {"d":"M16.617 6.895L13.336 10.523","key":"4"}),
    createElement(Path, {"d":"M2.84 16C4.383 19.531 7.898 22 12 22C16.102 22 19.617 19.531 21.16 16","key":"5"})
  );
});

GaugeTicksSplit.displayName = 'GaugeTicksSplit';

export default GaugeTicksSplit;
export { GaugeTicksSplit };
