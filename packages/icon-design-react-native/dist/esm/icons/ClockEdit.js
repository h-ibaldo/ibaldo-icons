import { createElement, forwardRef } from 'react';
import Svg, { G, Line, Path, Polyline } from 'react-native-svg';

const ClockEdit = forwardRef(function ClockEdit(
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
    createElement(Polyline, {"points":"12 6.999999999909051 12 11.999999999909051 17 11.999999999909051","key":"0"}),
    createElement(G, {"key":"1"},
      createElement(Path, {"d":"M2.585762024029464,13.757369994877081c-.781005859439574.781005859311335-.781005859549623,2.047363281180878-.000000000249202,2.82843017578125l5.414237976219738,5.414192199568788,3.000061035149884.000000000271029.00000000027012-2.999938964840112-5.414299011370531-5.414253234730495c-.781005859299512-.781066894600372-2.047363281179059-.781066894709511-2.828430175779431-.000000000249202l-.171569824240578.171569824198741Z","key":"0"}),
      createElement(Line, {"x1":"7","y1":"14.999992370769178","x2":"3.99999999972988","y2":"17.999992370498148","key":"1"})),
    createElement(Path, {"d":"M15,21.540771484278594c4.056823730469659-1.2744140625,7-5.063354492180224,7-9.540771484369543,0-5.522827148441138-4.477172851559772-10-10-10C7.522583007809772,1.999999999909051,3.733703613280341,4.943115234278594,2.459228515619543,8.999999999909051","key":"2"})
  );
});

ClockEdit.displayName = 'ClockEdit';

export default ClockEdit;
export { ClockEdit };
