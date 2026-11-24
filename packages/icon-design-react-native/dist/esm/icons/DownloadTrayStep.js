import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DownloadTrayStep = forwardRef(function DownloadTrayStep(
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
    createElement(Path, {"d":"M17 11L12 16L7 11","key":"0"}),
    createElement(Path, {"d":"M12 3L12 16","key":"1"}),
    createElement(Path, {"d":"M22 18L19 18L19 21L5 21L5 18L2 18","key":"2"})
  );
});

DownloadTrayStep.displayName = 'DownloadTrayStep';

export default DownloadTrayStep;
export { DownloadTrayStep };
