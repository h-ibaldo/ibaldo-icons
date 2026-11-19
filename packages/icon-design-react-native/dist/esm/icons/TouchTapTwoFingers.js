import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const TouchTapTwoFingers = forwardRef(function TouchTapTwoFingers(
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
    createElement(Circle, {"cx":"6.974731413245536","cy":"13.998779298537556","r":"5","key":"0"}),
    createElement(Path, {"d":"M11.974731413245536,6.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625","key":"1"}),
    createElement(Circle, {"cx":"16.974731413245536","cy":"13.998779298537556","r":"5","key":"2"}),
    createElement(Path, {"d":"M21.974731413245536,6.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625","key":"3"})
  );
});

TouchTapTwoFingers.displayName = 'TouchTapTwoFingers';

export default TouchTapTwoFingers;
export { TouchTapTwoFingers };
