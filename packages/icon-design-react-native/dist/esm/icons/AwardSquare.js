import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const AwardSquare = forwardRef(function AwardSquare(
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
    createElement(Path, {"d":"M12 7.297L14.484 6L15.324 8.676L18 9.516L16.703 12L18 14.484L15.324 15.324L14.484 18L12 16.703L9.516 18L8.676 15.324L6 14.484L7.297 12L6 9.516L8.676 8.676L9.516 6Z","key":"0"}),
    createElement(Path, {"d":"M13.473 17.473L18 22L19 19L22 18L17.473 13.473","key":"1"}),
    createElement(Path, {"d":"M6.527 13.473L2 18L5 19L6 22L10.527 17.473","key":"2"}),
    createElement(Path, {"d":"M2 14L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 14","key":"3"})
  );
});

AwardSquare.displayName = 'AwardSquare';

export default AwardSquare;
export { AwardSquare };
