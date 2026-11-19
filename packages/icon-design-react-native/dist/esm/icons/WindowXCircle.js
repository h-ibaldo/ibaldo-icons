import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const WindowXCircle = forwardRef(function WindowXCircle(
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
    createElement(Path, {"d":"M9.999999993642632,21.998779299956368H3.999999993642632c-1.104569499659192,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499661011,0,2,.895430500338989,2,2v6","key":"0"}),
    createElement(Line, {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368","key":"1"}),
    createElement(Line, {"x1":"17.999999998502972","y1":"14.99877929995273","x2":"14.999999998502972","y2":"17.99877929995273","key":"2"}),
    createElement(Line, {"x1":"14.999999998562998","y1":"14.998779299883608","x2":"17.99999999843385","y2":"17.998779300018214","key":"3"}),
    createElement(Circle, {"cx":"16.499999993652636","cy":"16.498779299955459","r":"5.499999999999545","key":"4"}),
    createElement(Line, {"x1":"5.00999999364285","y1":"4.998779299956368","x2":"4.999999993642632","y2":"4.998779299956368","key":"5"}),
    createElement(Line, {"x1":"8.00999999364285","y1":"4.998779299956368","x2":"7.999999993642632","y2":"4.998779299956368","key":"6"}),
    createElement(Line, {"x1":"11.00999999364285","y1":"4.998779299956368","x2":"10.999999993642632","y2":"4.998779299956368","key":"7"})
  );
});

WindowXCircle.displayName = 'WindowXCircle';

export default WindowXCircle;
export { WindowXCircle };
