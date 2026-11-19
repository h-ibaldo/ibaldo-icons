import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GaugeArcSemicircle = forwardRef(function GaugeArcSemicircle(
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
    createElement(Path, {"d":"M15 11L12 16","key":"0"}),
    createElement(Path, {"d":"M13 16C13 15.445 12.555 15 12 15C11.445 15 11 15.445 11 16C11 16.555 11.445 17 12 17C12.555 17 13 16.555 13 16Z","key":"1"}),
    createElement(Path, {"d":"M2 16C2 10.477 6.477 6 12 6C17.523 6 22 10.477 22 16","key":"2"}),
    createElement(Path, {"d":"M10.934 10.105C8.129 10.609 6 13.051 6 16","key":"3"}),
    createElement(Path, {"d":"M18 16C18 15.434 17.914 14.891 17.77 14.367","key":"4"})
  );
});

GaugeArcSemicircle.displayName = 'GaugeArcSemicircle';

export default GaugeArcSemicircle;
export { GaugeArcSemicircle };
