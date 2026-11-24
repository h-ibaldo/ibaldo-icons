import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquarePlusLinkClip = forwardRef(function SquarePlusLinkClip(
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
    createElement(Path, {"d":"M22 7C22 4.238 19.762 2 17 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22","key":"0"}),
    createElement(Path, {"d":"M13 16L11.828 17.172C10.723 18.277 10.723 20.066 11.828 21.172C12.934 22.277 14.723 22.277 15.828 21.172L17 20","key":"1"}),
    createElement(Path, {"d":"M20 17L21.172 15.828C22.277 14.723 22.277 12.934 21.172 11.828C20.066 10.723 18.277 10.723 17.172 11.828L16 13","key":"2"}),
    createElement(Path, {"d":"M15 18L18 15","key":"3"}),
    createElement(Path, {"d":"M7 9.5L12 9.5","key":"4"}),
    createElement(Path, {"d":"M9.5 7L9.5 12","key":"5"})
  );
});

SquarePlusLinkClip.displayName = 'SquarePlusLinkClip';

export default SquarePlusLinkClip;
export { SquarePlusLinkClip };
