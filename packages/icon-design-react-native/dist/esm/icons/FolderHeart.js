import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderHeart = forwardRef(function FolderHeart(
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
    createElement(Path, {"d":"M10 21L4 21C2.895 21 2 20.105 2 19L2 5C2 3.895 2.895 3 4 3L7.93 3C8.598 3 9.223 3.336 9.594 3.891L10.406 5.109C10.777 5.664 11.402 6 12.07 6L20 6C21.105 6 22 6.895 22 8L22 9","key":"0"}),
    createElement(Path, {"d":"M14.414 20.414L10.828 16.828C9.723 15.723 9.723 13.934 10.828 12.828C11.934 11.723 13.723 11.723 14.828 12.828L15.828 13.828L16.828 12.828C17.934 11.723 19.723 11.723 20.828 12.828C21.934 13.934 21.934 15.723 20.828 16.828L17.242 20.414C16.461 21.195 15.195 21.195 14.414 20.414Z","key":"1"})
  );
});

FolderHeart.displayName = 'FolderHeart';

export default FolderHeart;
export { FolderHeart };
