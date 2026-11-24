import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const SwitchRockerOn = forwardRef(function SwitchRockerOn(
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
    createElement(Rect, {"x":"4.999999977100742","y":"1.999996563434252","width":"14","height":"17","rx":"2","ry":"2","transform":"translate(23.999999954201485 20.999993126868503) rotate(180)","key":"0"}),
    createElement(Line, {"x1":"6.999999977100742","y1":"19.999996563434252","x2":"6.999999977100742","y2":"19.999996563434252","key":"1"}),
    createElement(Line, {"x1":"8.999999977100742","y1":"20.999996563434252","x2":"8.999999977100742","y2":"20.999996563434252","key":"2"}),
    createElement(Line, {"x1":"10.999999977100742","y1":"19.999996563434252","x2":"10.999999977100742","y2":"19.999996563434252","key":"3"}),
    createElement(Line, {"x1":"12.999999977100742","y1":"20.999996563434252","x2":"12.999999977100742","y2":"20.999996563434252","key":"4"}),
    createElement(Line, {"x1":"14.999999977100742","y1":"19.999996563434252","x2":"14.999999977100742","y2":"19.999996563434252","key":"5"}),
    createElement(Line, {"x1":"16.999999977100742","y1":"20.999996563434252","x2":"16.999999977100742","y2":"20.999996563434252","key":"6"}),
    createElement(Line, {"x1":"11.99999997732084","y1":"7.999996563434252","x2":"11.999999977590051","y2":"4.999996563434252","key":"7"}),
    createElement(Rect, {"x":"9.99999997950431","y":"11.999996568543139","width":"3.999999994551672","height":"3.999999989782225","rx":"1.999998004277914","ry":"1.999998004277914","key":"8"}),
    createElement(Path, {"d":"M4.999999977100742,16.999996563434252v3c0,1.104569499661011.895430500329894,2,2,2h10c1.104569499659192,0,2-.895430500338989,2-2v-3","key":"9"})
  );
});

SwitchRockerOn.displayName = 'SwitchRockerOn';

export default SwitchRockerOn;
export { SwitchRockerOn };
