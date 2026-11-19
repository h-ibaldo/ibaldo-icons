import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const UploadTrayStep = forwardRef(function UploadTrayStep(
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
    createElement(Path, {"d":"M7 8L12 3L17 8","key":"0"}),
    createElement(Path, {"d":"M12 16L12 3","key":"1"}),
    createElement(Path, {"d":"M22 18L19 18L19 21L5 21L5 18L2 18","key":"2"})
  );
});

UploadTrayStep.displayName = 'UploadTrayStep';

export default UploadTrayStep;
export { UploadTrayStep };
