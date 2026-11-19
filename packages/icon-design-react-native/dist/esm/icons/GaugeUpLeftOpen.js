import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GaugeUpLeftOpen = forwardRef(function GaugeUpLeftOpen(
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
    createElement(Path, {"d":"M5 5L12 12","key":"0"}),
    createElement(Path, {"d":"M13 12C13 11.445 12.555 11 12 11C11.445 11 11 11.445 11 12C11 12.555 11.445 13 12 13C12.555 13 13 12.555 13 12Z","key":"1"}),
    createElement(Path, {"d":"M2.469 9C2.168 9.945 2 10.953 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2L12 5","key":"2"})
  );
});

GaugeUpLeftOpen.displayName = 'GaugeUpLeftOpen';

export default GaugeUpLeftOpen;
export { GaugeUpLeftOpen };
