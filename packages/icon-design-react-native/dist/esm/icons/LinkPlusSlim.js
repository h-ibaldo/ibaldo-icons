import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkPlusSlim = forwardRef(function LinkPlusSlim(
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
    createElement(Path, {"d":"M11.027 7.977L10.027 8.977C8.66 10.344 8.66 12.559 10.027 13.926L10.074 13.977C11.441 15.344 13.66 15.344 15.027 13.977L21 8C22.367 6.633 22.367 4.418 21 3.051L20.949 3C19.762 1.813 17.938 1.66 16.586 2.535","key":"0"}),
    createElement(Path, {"d":"M13 11.004L14 10.004C15.367 8.637 15.367 6.418 14 5.051L13.949 5.004C12.582 3.637 10.367 3.637 9 5.004L3.023 10.977C1.656 12.344 1.656 14.559 3.023 15.926L3.074 15.977C4.262 17.164 6.086 17.316 7.441 16.441","key":"1"}),
    createElement(Path, {"d":"M19 16L19 22","key":"2"}),
    createElement(Path, {"d":"M22 19L16 19","key":"3"})
  );
});

LinkPlusSlim.displayName = 'LinkPlusSlim';

export default LinkPlusSlim;
export { LinkPlusSlim };
