import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const BellXFlat = forwardRef(function BellXFlat(
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
    createElement(Path, {"d":"M13.974731449501633,17.000000000480213v2.000002000000677c0,1.104568395086972-.895429604906894,1.999997999999323-1.999997999998413,1.999997999999323h-.000004000000445c-1.10456839509061,0-1.999998000001142-.895429604912351-1.999998000001142-1.999997999999323v-2.000002000000677","key":"0"}),
    createElement(Line, {"x1":"19.974731449501633","y1":"17.000000000480213","x2":"3.974731449501633","y2":"17.000000000480213","key":"1"}),
    createElement(Path, {"d":"M17.974731449501633,17.000000000480213v-7.000006000002031c0-3.313705185279105-2.686288814723412-5.999993999997969-5.999993999997969-5.999993999997969h-.000012000001334c-3.313705185274557,0-5.999994000000697,2.686288814718864-5.999994000000697,5.999993999997969v7.000006000002031","key":"2"}),
    createElement(Line, {"x1":"11.974731449501633","y1":"2.000000000480213","x2":"11.974731449501633","y2":"4.000000000480213","key":"3"}),
    createElement(Line, {"x1":"9.974731449501633","y1":"13.000000000480213","x2":"13.974731449501633","y2":"9.000000000480213","key":"4"}),
    createElement(Line, {"x1":"13.974731449501633","y1":"13.000000000480213","x2":"9.974731449390674","y2":"9.000000000589353","key":"5"})
  );
});

BellXFlat.displayName = 'BellXFlat';

export default BellXFlat;
export { BellXFlat };
