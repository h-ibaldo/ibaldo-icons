import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path, Polyline } from 'react-native-svg';

const BellClockFlat = forwardRef(function BellClockFlat(
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
    createElement(Path, {"d":"M11.974731449501633,18.000000000480213v2.000002000000677c0,1.104568395086972-.895429604908713,1.999997999999323-1.999997999999323,1.999997999999323h-.000004000001354c-1.10456839509061,0-1.999997999999323-.895429604912351-1.999997999999323-1.999997999999323v-2.000002000000677","key":"0"}),
    createElement(Line, {"x1":"17.974731449501633","y1":"18.000000000480213","x2":"1.974731449501633","y2":"18.000000000480213","key":"1"}),
    createElement(Line, {"x1":"9.974731449501633","y1":"3.000000000480213","x2":"9.974731449501633","y2":"5.000000000480213","key":"2"}),
    createElement(Circle, {"cx":"16.974731447075101","cy":"7.999999998052772","r":"4.999999997575742","key":"3"}),
    createElement(Path, {"d":"M12.606323246376633,5.614135742667713c-.79541015625-.3895263671875-1.68621826171875-.6141357421875-2.631591796875-.6141357421875-3.313720703125,0-6,2.686279296878638-6,6v7h12v-5.100830078121362","key":"4"}),
    createElement(Polyline, {"points":"16.974731449501633 6.000000000480213 16.974731449501633 8.000000000480213 18.974731449501633 8.000000000480213","key":"5"})
  );
});

BellClockFlat.displayName = 'BellClockFlat';

export default BellClockFlat;
export { BellClockFlat };
