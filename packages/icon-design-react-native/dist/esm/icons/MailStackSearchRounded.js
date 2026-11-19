import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const MailStackSearchRounded = forwardRef(function MailStackSearchRounded(
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
    createElement(Circle, {"cx":"17.999999976489562","cy":"15.998779299956368","r":"4","key":"0"}),
    createElement(Line, {"x1":"15.171569800710131","y1":"18.827209475737618","x2":"11.999999976489562","y2":"21.998779299956368","key":"1"}),
    createElement(Path, {"d":"M10.999999976489562,12.998779299956368h-3c-1.104569499659192,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500340808-2,2-2h12c1.104569499670106,0,2,.895430500338989,2,2l.000000000010914,6","key":"2"}),
    createElement(Path, {"d":"M1.999999976489562,4.998779299956368v10c0,1.104569499661011.895430500340808,2,2,2h6","key":"3"}),
    createElement(Path, {"d":"M8.999999976489562,4.998779299956368l3.750609904889643,3.00048792391317c.730437301861457.584349841483345,1.768342888361076.584349841483345,2.498780190220714,0l3.750609904889643-3.00048792391317","key":"4"})
  );
});

MailStackSearchRounded.displayName = 'MailStackSearchRounded';

export default MailStackSearchRounded;
export { MailStackSearchRounded };
