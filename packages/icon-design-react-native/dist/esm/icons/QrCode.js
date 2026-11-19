import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const QrCode = forwardRef(function QrCode(
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
    createElement(Path, {"d":"M10 12L4 12C2.895 12 2 11.105 2 10L2 4C2 2.895 2.895 2 4 2L10 2C11.105 2 12 2.895 12 4L12 10C12 11.105 11.105 12 10 12Z","key":"0"}),
    createElement(Path, {"d":"M22 12L18 12C16.895 12 16 11.105 16 10L16 4C16 2.895 16.895 2 18 2L22 2","key":"1"}),
    createElement(Path, {"d":"M2 22L2 18C2 16.895 2.895 16 4 16L10 16C11.105 16 12 16.895 12 18L12 22","key":"2"}),
    createElement(Path, {"d":"M16 22L16 18C16 16.895 16.895 16 18 16L22 16","key":"3"})
  );
});

QrCode.displayName = 'QrCode';

export default QrCode;
export { QrCode };
