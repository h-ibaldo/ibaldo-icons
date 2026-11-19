import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ScanGlobe = forwardRef(function ScanGlobe(
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
    createElement(Path, {"d":"M20 12C20 16.418 16.418 20 12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4C16.418 4 20 7.582 20 12Z","key":"0"}),
    createElement(Path, {"d":"M8.8 12C8.8 15.274 10.06 18.172 12 20C13.94 18.172 15.2 15.274 15.2 12C15.2 8.726 13.94 5.828 12 4C10.06 5.828 8.8 8.726 8.8 12Z","key":"1"}),
    createElement(Path, {"d":"M4 12L20 12","key":"2"}),
    createElement(Path, {"d":"M19 2L20 2C21.105 2 22 2.895 22 4L22 5","key":"3"}),
    createElement(Path, {"d":"M22 19L22 20C22 21.105 21.105 22 20 22L19 22","key":"4"}),
    createElement(Path, {"d":"M5 22L4 22C2.895 22 2 21.105 2 20L2 19","key":"5"}),
    createElement(Path, {"d":"M2 5L2 4C2 2.895 2.895 2 4 2L5 2","key":"6"})
  );
});

ScanGlobe.displayName = 'ScanGlobe';

export default ScanGlobe;
export { ScanGlobe };
