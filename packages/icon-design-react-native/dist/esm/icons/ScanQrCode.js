import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ScanQrCode = forwardRef(function ScanQrCode(
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
    createElement(Path, {"d":"M22 17L22 20C22 21.105 21.105 22 20 22L17 22","key":"0"}),
    createElement(Path, {"d":"M2 7L2 4C2 2.895 2.895 2 4 2L7 2","key":"1"}),
    createElement(Path, {"d":"M17 2L20 2C21.105 2 22 2.895 22 4L22 7","key":"2"}),
    createElement(Path, {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 17","key":"3"}),
    createElement(Path, {"d":"M8 7L11 7C11.551 7 12 7.449 12 8L12 10C12 10.551 11.551 11 11 11L8 11C7.449 11 7 10.551 7 10L7 8C7 7.449 7.449 7 8 7Z","key":"4"}),
    createElement(Path, {"d":"M15 7L17 7L17 10L15 10Z","key":"5"}),
    createElement(Path, {"d":"M16 16L17 16L17 17L16 17Z","key":"6"}),
    createElement(Path, {"d":"M7 14L9 14L9 17L7 17Z","key":"7"}),
    createElement(Path, {"d":"M12 14L13 14L13 17L12 17Z","key":"8"}),
    createElement(Path, {"d":"M16 13L17 13","key":"9"})
  );
});

ScanQrCode.displayName = 'ScanQrCode';

export default ScanQrCode;
export { ScanQrCode };
