import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TagDollarTilted = forwardRef(function TagDollarTilted(
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
    createElement(Path, {"d":"M22 4L22 10.172C22 10.703 21.789 11.211 21.414 11.586L12 21C11.219 21.781 9.953 21.781 9.172 21L3 14.828C2.219 14.047 2.219 12.781 3 12L12.414 2.586C12.789 2.211 13.297 2 13.828 2L20 2C21.105 2 22 2.895 22 4Z","key":"0"}),
    createElement(Path, {"d":"M17 11C17 9.719 16.492 8.492 15.586 7.586L15.414 7.414C14.633 6.633 13.367 6.633 12.586 7.414L12.414 7.586C11.633 8.367 11.633 9.633 12.414 10.414L13.586 11.586C14.367 12.367 14.367 13.633 13.586 14.414L13.414 14.586C12.633 15.367 11.367 15.367 10.586 14.586L10.414 14.414C9.508 13.508 9 12.281 9 11","key":"1"}),
    createElement(Path, {"d":"M17 7L16 8","key":"2"}),
    createElement(Path, {"d":"M10 14L9 15","key":"3"})
  );
});

TagDollarTilted.displayName = 'TagDollarTilted';

export default TagDollarTilted;
export { TagDollarTilted };
