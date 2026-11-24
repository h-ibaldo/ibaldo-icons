import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const PollHorizontalCheckX = forwardRef(function PollHorizontalCheckX(
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
    createElement(Polyline, {"points":"2.025268534409406 1.99999999883039 13.025268534409406 1.99999999883039 13.025268534409406 5.99999999883039 2.025268534409406 5.99999999883039","key":"0"}),
    createElement(Polyline, {"points":"2.025268534409406 9.99999999883039 6.025268534409406 9.99999999883039 6.025268534409406 13.99999999883039 2.025268534409406 13.99999999883039","key":"1"}),
    createElement(Polyline, {"points":"2.025268534409406 17.99999999883039 10.025268534409406 17.99999999883039 10.025268534409406 21.99999999883039 2.025268534409406 21.99999999883039","key":"2"}),
    createElement(Polyline, {"points":"17.025268534409406 2.99999999883039 19.025268534409406 4.99999999883039 22.025268534409406 1.99999999883039","key":"3"}),
    createElement(Line, {"x1":"10.025268534409406","y1":"13.99999999883039","x2":"14.025268534409406","y2":"9.99999999883039","key":"4"}),
    createElement(Line, {"x1":"10.025268534409406","y1":"9.99999999883039","x2":"14.025268534409406","y2":"13.99999999883039","key":"5"}),
    createElement(Line, {"x1":"14.025268534409406","y1":"21.99999999883039","x2":"18.025268534409406","y2":"17.99999999883039","key":"6"}),
    createElement(Line, {"x1":"14.025268534409406","y1":"17.99999999883039","x2":"18.025268534409406","y2":"21.99999999883039","key":"7"})
  );
});

PollHorizontalCheckX.displayName = 'PollHorizontalCheckX';

export default PollHorizontalCheckX;
export { PollHorizontalCheckX };
