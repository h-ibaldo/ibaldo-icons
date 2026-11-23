import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DraftingCompassArc = forwardRef(function DraftingCompassArc(
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
    createElement(Path, {"d":"M9 5C9 3.344 10.344 2 12 2C13.656 2 15 3.344 15 5C15 6.656 13.656 8 12 8C10.344 8 9 6.656 9 5Z","key":"0"}),
    createElement(Path, {"d":"M20 13.945C17.875 15.844 15.074 17 12 17C8.926 17 6.125 15.844 4 13.945","key":"1"}),
    createElement(Path, {"d":"M13.402 7.652L17.617 15.609","key":"2"}),
    createElement(Path, {"d":"M19.02 18.258L21 22","key":"3"}),
    createElement(Path, {"d":"M3 22L10.598 7.652","key":"4"})
  );
});

DraftingCompassArc.displayName = 'DraftingCompassArc';

export default DraftingCompassArc;
export { DraftingCompassArc };
