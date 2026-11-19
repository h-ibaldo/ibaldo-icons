import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TagStringUpRound = forwardRef(function TagStringUpRound(
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
    createElement(Path, {"d":"M4 7L4 13.172C4 13.703 4.211 14.211 4.586 14.586L11.586 21.586C12.367 22.367 13.633 22.367 14.414 21.586L20.586 15.414C21.367 14.633 21.367 13.367 20.586 12.586L13.586 5.586C13.211 5.211 12.703 5 12.172 5L6 5C4.895 5 4 5.895 4 7Z","key":"0"}),
    createElement(Path, {"d":"M8.5 9.828C8.223 9.828 8 9.605 8 9.328C8 9.051 8.223 8.828 8.5 8.828C8.777 8.828 9 9.051 9 9.328C9 9.605 8.777 9.828 8.5 9.828Z","key":"1"}),
    createElement(Path, {"d":"M8 2L8 9","key":"2"})
  );
});

TagStringUpRound.displayName = 'TagStringUpRound';

export default TagStringUpRound;
export { TagStringUpRound };
