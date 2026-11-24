import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const BookInfo = forwardRef(function BookInfo(
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
    createElement(Path, {"d":"M19,17H6.999997999999323c-1.1045683950897,0-1.999997999999323.895429604912351-1.999997999999323,1.999997999999323v.000004000001354c0,1.10456839509061.895429604909623,1.999997999999323,1.999997999999323,1.999997999999323h12.000002000000677","key":"0"}),
    createElement(Path, {"d":"M19,17V3H6.999997999999323c-1.1045683950897,0-1.999997999999323.895429604912351-1.999997999999323,1.999997999999323v.000004000001354","key":"1"}),
    createElement(Line, {"x1":"5","y1":"5","x2":"5","y2":"19","key":"2"}),
    createElement(Line, {"x1":"12.025268548599342","y1":"6.988779303362207","x2":"12.025268548599342","y2":"6.998779303362426","key":"3"}),
    createElement(Line, {"x1":"12","y1":"10","x2":"12","y2":"13","key":"4"})
  );
});

BookInfo.displayName = 'BookInfo';

export default BookInfo;
export { BookInfo };
