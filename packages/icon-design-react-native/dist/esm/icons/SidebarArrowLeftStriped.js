import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const SidebarArrowLeftStriped = forwardRef(function SidebarArrowLeftStriped(
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
    createElement(Rect, {"x":"2.025268564202634","y":"4.000000000716682","width":"20","height":"16","rx":"2.000000000000304","ry":"2.000000000000304","transform":"translate(24.050537127327516 24.000000002513382) rotate(-180)","key":"0"}),
    createElement(Line, {"x1":"8.025268563484133","y1":"20.000000000357431","x2":"8.025268564921134","y2":"4.000000000357431","key":"1"}),
    createElement(Line, {"x1":"18.025268564202634","y1":"12.000000001255103","x2":"12.025268564202634","y2":"12.000000000717591","key":"2"}),
    createElement(Polyline, {"points":"15.025268563933423 15.000000000985892 12.025268564202634 12.000000000717591 15.025268564471844 9.000000000985892","key":"3"}),
    createElement(Line, {"x1":"8.025268564471844","y1":"9.000000000357431","x2":"2.025268563933423","y2":"14.999999999819011","key":"4"}),
    createElement(Line, {"x1":"2.204956063590544","y1":"18.820190429521972","x2":"8.025268564112594","y2":"13.000000000357431","key":"5"}),
    createElement(Line, {"x1":"8.025268563753343","y1":"17.000000000357431","x2":"5.025268563484133","y2":"20.000000000088221","key":"6"}),
    createElement(Line, {"x1":"8.025268564831094","y1":"5.000000000357431","x2":"2.025268564292674","y2":"10.999999999819011","key":"7"}),
    createElement(Line, {"x1":"5.025268564921134","y1":"4.000000000088221","x2":"2.025268564651924","y2":"6.999999999819011","key":"8"})
  );
});

SidebarArrowLeftStriped.displayName = 'SidebarArrowLeftStriped';

export default SidebarArrowLeftStriped;
export { SidebarArrowLeftStriped };
