import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const HourglassCircleDiagonal = forwardRef(function HourglassCircleDiagonal(
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
    createElement(Path, {"d":"M12 12L14.414 14.414C14.789 14.789 15 15.297 15 15.828L15 17L9 17L9 15.828C9 15.297 9.211 14.789 9.586 14.414L10 14","key":"0"}),
    createElement(Path, {"d":"M12 12L9.586 9.586C9.211 9.211 9 8.703 9 8.172L9 7L15 7L15 8.172C15 8.703 14.789 9.211 14.414 9.586L14 10","key":"1"}),
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"2"})
  );
});

HourglassCircleDiagonal.displayName = 'HourglassCircleDiagonal';

export default HourglassCircleDiagonal;
export { HourglassCircleDiagonal };
