import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TrashCircleBucket = forwardRef(function TrashCircleBucket(
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
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement(Path, {"d":"M17 11L7 11L7 8L17 8Z","key":"1"}),
    createElement(Path, {"d":"M8 11L9 17L15 17L16 11","key":"2"})
  );
});

TrashCircleBucket.displayName = 'TrashCircleBucket';

export default TrashCircleBucket;
export { TrashCircleBucket };
