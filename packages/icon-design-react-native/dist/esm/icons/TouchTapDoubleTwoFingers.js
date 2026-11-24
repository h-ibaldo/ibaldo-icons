import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const TouchTapDoubleTwoFingers = forwardRef(function TouchTapDoubleTwoFingers(
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
    createElement(Circle, {"cx":"6.974731413245536","cy":"15.998779298537556","r":"5","key":"0"}),
    createElement(Path, {"d":"M11.974731413245536,8.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625","key":"1"}),
    createElement(Circle, {"cx":"16.974731413245536","cy":"15.998779298537556","r":"5","key":"2"}),
    createElement(Path, {"d":"M21.974731413245536,8.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625","key":"3"}),
    createElement(Path, {"d":"M20.974731413245536,3.636840821975056c-1.261108398439319-.40875244140625-2.602661132808862-.6380615234375-4-.6380615234375-1.772338867189319,0-3.46044921875.35736083984375-5,.99957275390625","key":"4"}),
    createElement(Path, {"d":"M11.974731413245536,3.998352052443806c-1.53955078125-.6422119140625-3.227661132808862-.99957275390625-5-.99957275390625-1.397338867189319,0-2.738891601558862.22930908203125-4,.6380615234375","key":"5"})
  );
});

TouchTapDoubleTwoFingers.displayName = 'TouchTapDoubleTwoFingers';

export default TouchTapDoubleTwoFingers;
export { TouchTapDoubleTwoFingers };
