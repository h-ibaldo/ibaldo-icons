import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WindowLinkPlain = forwardRef(function WindowLinkPlain(
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
    createElement(Path, {"d":"M14 19L18 19","key":"0"}),
    createElement(Path, {"d":"M14 22L13 22C11.344 22 10 20.656 10 19C10 17.344 11.344 16 13 16L14 16","key":"1"}),
    createElement(Path, {"d":"M18 16L19 16C20.656 16 22 17.344 22 19C22 20.656 20.656 22 19 22L18 22","key":"2"}),
    createElement(Path, {"d":"M7 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 13","key":"3"}),
    createElement(Path, {"d":"M2 8L22 8","key":"4"})
  );
});

WindowLinkPlain.displayName = 'WindowLinkPlain';

export default WindowLinkPlain;
export { WindowLinkPlain };
