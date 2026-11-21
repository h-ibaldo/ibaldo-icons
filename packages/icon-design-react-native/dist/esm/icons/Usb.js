import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Usb = forwardRef(function Usb(
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
    createElement(Path, {"d":"M10 20C10 18.895 10.895 18 12 18C13.105 18 14 18.895 14 20C14 21.105 13.105 22 12 22C10.895 22 10 21.105 10 20Z","key":"0"}),
    createElement(Path, {"d":"M12 18L12 6","key":"1"}),
    createElement(Path, {"d":"M12 2L9 6L15 6Z","key":"2"}),
    createElement(Path, {"d":"M12 13L19 13L19 10","key":"3"}),
    createElement(Path, {"d":"M12 16L6 16L6 13","key":"4"}),
    createElement(Path, {"d":"M18 6L20 6C20.551 6 21 6.449 21 7L21 9C21 9.551 20.551 10 20 10L18 10C17.449 10 17 9.551 17 9L17 7C17 6.449 17.449 6 18 6Z","key":"5"}),
    createElement(Path, {"d":"M6 9C4.895 9 4 9.895 4 11C4 12.105 4.895 13 6 13C7.105 13 8 12.105 8 11C8 9.895 7.105 9 6 9Z","key":"6"})
  );
});

Usb.displayName = 'Usb';

export default Usb;
export { Usb };
