import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const BellDotFlat = forwardRef(function BellDotFlat(
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
    createElement(Path, {"d":"M13.974731449499814,17.000000000480213v2.000002000000677c0,1.104568395086972-.895429604910532,1.999997999999323-1.999997999990228,1.999997999999323h-.000004000010449c-1.104568395088791,0-1.999997999999323-.895429604912351-1.999997999999323-1.999997999999323v-2.000002000000677","key":"0"}),
    createElement(Line, {"x1":"19.974731449499814","y1":"17.000000000480213","x2":"3.974731449499814","y2":"17.000000000480213","key":"1"}),
    createElement(Line, {"x1":"11.974731449499814","y1":"2.000000000480213","x2":"11.974731449499814","y2":"4.000000000480213","key":"2"}),
    createElement(Circle, {"cx":"17.974731449499814","cy":"6.000000000480213","r":"3","key":"3"}),
    createElement(Path, {"d":"M15.179138187779245,4.933349609858851c-.927734375-.588012695319776-2.024658203119543-.933349609378638-3.204406738279431-.933349609378638-3.313720703119543,0-6,2.686279296878638-6,6v7h12v-7c0-.3447265625-.035583496090112-.680419921871362-.091369628909888-1.00927734375","key":"4"})
  );
});

BellDotFlat.displayName = 'BellDotFlat';

export default BellDotFlat;
export { BellDotFlat };
