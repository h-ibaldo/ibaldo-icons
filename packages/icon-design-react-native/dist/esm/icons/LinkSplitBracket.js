import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkSplitBracket = forwardRef(function LinkSplitBracket(
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
    createElement(Path, {"d":"M9 17L7 17C4.238 17 2 14.762 2 12C2 9.238 4.238 7 7 7L9 7","key":"0"}),
    createElement(Path, {"d":"M19.121 9L20.535 10.414C22.488 12.367 22.488 15.531 20.535 17.484C18.582 19.438 15.418 19.438 13.465 17.484L12.051 16","key":"1"}),
    createElement(Path, {"d":"M8 12L16 12","key":"2"})
  );
});

LinkSplitBracket.displayName = 'LinkSplitBracket';

export default LinkSplitBracket;
export { LinkSplitBracket };
