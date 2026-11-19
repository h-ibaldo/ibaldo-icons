import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TagStackOffset = forwardRef(function TagStackOffset(
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
    createElement(Path, {"d":"M17 20L6.492 20C6.18 20 5.891 19.855 5.699 19.609L1.84 14.609C1.559 14.25 1.559 13.75 1.84 13.391L5.699 8.391C5.891 8.145 6.18 8 6.492 8L17 8C17.551 8 18 8.449 18 9L18 19C18 19.551 17.551 20 17 20Z","key":"0"}),
    createElement(Path, {"d":"M10 4L19 4C20.656 4 22 5.344 22 7L22 16","key":"1"}),
    createElement(Path, {"d":"M6 14L6 14","key":"2"})
  );
});

TagStackOffset.displayName = 'TagStackOffset';

export default TagStackOffset;
export { TagStackOffset };
