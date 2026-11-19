import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClipboardLink = forwardRef(function ClipboardLink(
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
    createElement(Path, {"d":"M14 18L18 18","key":"0"}),
    createElement(Path, {"d":"M14 21L13 21C11.344 21 10 19.656 10 18C10 16.344 11.344 15 13 15L14 15","key":"1"}),
    createElement(Path, {"d":"M18 15L19 15C20.656 15 22 16.344 22 18C22 19.656 20.656 21 19 21L18 21","key":"2"}),
    createElement(Path, {"d":"M7 22L5 22C3.895 22 3 21.105 3 20L3 6C3 4.895 3.895 4 5 4L8 4","key":"3"}),
    createElement(Path, {"d":"M16 4L19 4C20.105 4 21 4.895 21 6L21 11","key":"4"}),
    createElement(Path, {"d":"M14.883 7L9.117 7C8.5 7 8 6.5 8 5.883L8 3.117C8 2.5 8.5 2 9.117 2L14.883 2C15.5 2 16 2.5 16 3.117L16 5.883C16 6.5 15.5 7 14.883 7Z","key":"5"})
  );
});

ClipboardLink.displayName = 'ClipboardLink';

export default ClipboardLink;
export { ClipboardLink };
