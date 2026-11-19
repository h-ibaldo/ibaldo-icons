import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkDotsInterlocked = forwardRef(function LinkDotsInterlocked(
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
    createElement(Path, {"d":"M11 12.102L10.586 12.516C9.023 14.078 9.023 16.609 10.586 18.172L10.93 18.516C12.492 20.078 15.023 20.078 16.586 18.516L20.93 14.172C22.492 12.609 22.492 10.078 20.93 8.516L20.586 8.172C19.219 6.805 17.109 6.633 15.559 7.66","key":"0"}),
    createElement(Path, {"d":"M13 16.102L13.414 15.688C14.977 14.125 14.977 11.59 13.414 10.031L13.07 9.688C11.508 8.125 8.977 8.125 7.414 9.688L3.07 14.031C1.508 15.59 1.508 18.125 3.07 19.688L3.414 20.031C4.781 21.395 6.891 21.566 8.441 20.543","key":"1"}),
    createElement(Path, {"d":"M3 4L3 4","key":"2"}),
    createElement(Path, {"d":"M7 4L7 4","key":"3"})
  );
});

LinkDotsInterlocked.displayName = 'LinkDotsInterlocked';

export default LinkDotsInterlocked;
export { LinkDotsInterlocked };
