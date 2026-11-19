import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GaugeTicksFlat = forwardRef(function GaugeTicksFlat(
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
    createElement(Path, {"d":"M12 3.004L12 6.004","key":"0"}),
    createElement(Path, {"d":"M22 13.004L19 13.004","key":"1"}),
    createElement(Path, {"d":"M5 13.004L2 13.004","key":"2"}),
    createElement(Path, {"d":"M13.926 13.539C14.223 12.477 13.602 11.371 12.535 11.074C11.473 10.777 10.371 11.402 10.074 12.465C9.777 13.527 10.398 14.633 11.461 14.93C12.527 15.227 13.629 14.602 13.926 13.539Z","key":"3"}),
    createElement(Path, {"d":"M16.617 7.895L13.336 11.523","key":"4"}),
    createElement(Path, {"d":"M6.012 21L17.984 21C19.695 19.723 21.016 17.898 21.633 15.688C23.113 10.363 20.004 4.852 14.684 3.367C9.363 1.887 3.852 5 2.367 10.316C1.23 14.406 2.809 18.602 6.012 21Z","key":"5"})
  );
});

GaugeTicksFlat.displayName = 'GaugeTicksFlat';

export default GaugeTicksFlat;
export { GaugeTicksFlat };
