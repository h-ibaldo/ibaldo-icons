import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TextACircleRound = forwardRef(function TextACircleRound(
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
    createElement(Path, {"d":"M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z","key":"0"}),
    createElement(Path, {"d":"M8 16L10.773 7.684C10.906 7.273 11.289 7 11.723 7L12.277 7C12.711 7 13.094 7.273 13.227 7.684L16 16","key":"1"}),
    createElement(Path, {"d":"M9 14L15 14","key":"2"})
  );
});

TextACircleRound.displayName = 'TextACircleRound';

export default TextACircleRound;
export { TextACircleRound };
