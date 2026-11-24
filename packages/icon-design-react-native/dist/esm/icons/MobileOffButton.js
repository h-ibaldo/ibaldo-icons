import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MobileOffButton = forwardRef(function MobileOffButton(
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
    createElement(Path, {"d":"M13 19L11 19","key":"0"}),
    createElement(Path, {"d":"M22 2L2 22","key":"1"}),
    createElement(Path, {"d":"M6 13L6 4C6 2.895 6.895 2 8 2L16 2C16.293 2 16.574 2.063 16.824 2.176","key":"2"}),
    createElement(Path, {"d":"M18 6L18 20C18 21.105 17.105 22 16 22L8 22C6.895 22 6 21.105 6 20L6 18","key":"3"})
  );
});

MobileOffButton.displayName = 'MobileOffButton';

export default MobileOffButton;
export { MobileOffButton };
