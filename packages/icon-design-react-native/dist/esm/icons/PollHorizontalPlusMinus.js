import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const PollHorizontalPlusMinus = forwardRef(function PollHorizontalPlusMinus(
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
    createElement(Polyline, {"points":"2.025268534409406 1.99999999883039 14.025268534409406 1.99999999883039 14.025268534409406 5.99999999883039 2.025268534409406 5.99999999883039","key":"0"}),
    createElement(Polyline, {"points":"2.025268534409406 9.99999999883039 6.025268534409406 9.99999999883039 6.025268534409406 13.99999999883039 2.025268534409406 13.99999999883039","key":"1"}),
    createElement(Polyline, {"points":"2.025268534409406 17.99999999883039 10.025268534409406 17.99999999883039 10.025268534409406 21.99999999883039 2.025268534409406 21.99999999883039","key":"2"}),
    createElement(Line, {"x1":"18.025268534409406","y1":"3.99999999883039","x2":"22.025268534409406","y2":"3.99999999883039","key":"3"}),
    createElement(Line, {"x1":"20.025268534409406","y1":"1.99999999883039","x2":"20.025268534409406","y2":"5.99999999883039","key":"4"}),
    createElement(Line, {"x1":"14.025268534409406","y1":"19.99999999883039","x2":"18.025268534409406","y2":"19.99999999883039","key":"5"}),
    createElement(Line, {"x1":"10.025268534409406","y1":"11.99999999883039","x2":"14.025268534409406","y2":"11.99999999883039","key":"6"}),
    createElement(Line, {"x1":"16.025268534409406","y1":"17.99999999883039","x2":"16.025268534409406","y2":"21.99999999883039","key":"7"})
  );
});

PollHorizontalPlusMinus.displayName = 'PollHorizontalPlusMinus';

export default PollHorizontalPlusMinus;
export { PollHorizontalPlusMinus };
