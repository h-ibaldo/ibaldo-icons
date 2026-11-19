import { createElement, forwardRef } from 'react';
import Svg, { G, Line, Path } from 'react-native-svg';

const EyeOffShine = forwardRef(function EyeOffShine(
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
    createElement(Line, {"x1":"4.025268539455283","y1":"19.997562040162848","x2":"20.025268539455283","y2":"3.997562040162848","key":"0"}),
    createElement(G, {"key":"1"},
      createElement(Path, {"d":"M10.229370101955283,18.79346047765921c.594482421880457.12872314453125,1.19482421875.2041015625,1.7958984375.2041015625,4,0,8-3,10-7-.5400390625-1.080078125-1.2294921875-2.083251953125-2.02197265625-2.9781494140625","key":"0"}),
      createElement(Path, {"d":"M17.325073226955283,6.69763528234671c-1.639404296869543-1.06585693359375-3.46826171875-1.7000732421875-5.2998046875-1.7000732421875-4,0-8,3-10,7,1.084228515630457,2.1685791015625,2.7587890625,4.03790283203125,4.7001953125,5.2999267578125","key":"1"})),
    createElement(G, {"key":"2"},
      createElement(Path, {"d":"M14.85363768008574,9.16913186437796c-.723876953130457-.72381591796875-1.723876953130457-1.17156982421875-2.828369140630457-1.17156982421875-2.209228515619543,0-4,1.79083251953125-4,4,0,1.10455322265625.44775390625,2.1046142578125,1.171630859380457,2.82843017578125","key":"0"}),
      createElement(Path, {"d":"M13.230346664455283,15.79248391515921c1.233642578130457-.39215087890625,2.19775390625-1.35626220703125,2.58984375-2.58984375","key":"1"}))
  );
});

EyeOffShine.displayName = 'EyeOffShine';

export default EyeOffShine;
export { EyeOffShine };
