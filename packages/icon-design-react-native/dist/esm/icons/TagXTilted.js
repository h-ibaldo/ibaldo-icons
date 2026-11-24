import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TagXTilted = forwardRef(function TagXTilted(
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
    createElement(Path, {"d":"M19 3L19 8.586C19 8.852 18.895 9.105 18.707 9.293L9.707 18.293C9.316 18.684 8.684 18.684 8.293 18.293L2.707 12.707C2.316 12.316 2.316 11.684 2.707 11.293L11.707 2.293C11.895 2.105 12.148 2 12.414 2L18 2C18.551 2 19 2.449 19 3Z","key":"0"}),
    createElement(Path, {"d":"M14.5 7C14.777 7 15 6.777 15 6.5C15 6.223 14.777 6 14.5 6C14.223 6 14 6.223 14 6.5C14 6.777 14.223 7 14.5 7Z","key":"1"}),
    createElement(Path, {"d":"M17 22L22 17","key":"2"}),
    createElement(Path, {"d":"M22 22L17 17","key":"3"})
  );
});

TagXTilted.displayName = 'TagXTilted';

export default TagXTilted;
export { TagXTilted };
