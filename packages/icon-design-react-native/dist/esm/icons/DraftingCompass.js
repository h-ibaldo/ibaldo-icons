import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DraftingCompass = forwardRef(function DraftingCompass(
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
    createElement(Path, {"d":"M9 7C9 5.344 10.344 4 12 4C13.656 4 15 5.344 15 7C15 8.656 13.656 10 12 10C10.344 10 9 8.656 9 7Z","key":"0"}),
    createElement(Path, {"d":"M12 2L12 4","key":"1"}),
    createElement(Path, {"d":"M4 22L10.59 9.648","key":"2"}),
    createElement(Path, {"d":"M13.41 9.648L20 22","key":"3"}),
    createElement(Path, {"d":"M4 16L20 16","key":"4"}),
    createElement(Path, {"d":"M12 14L12 18","key":"5"})
  );
});

DraftingCompass.displayName = 'DraftingCompass';

export default DraftingCompass;
export { DraftingCompass };
