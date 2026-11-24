import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const MailSearchRounded = forwardRef(function MailSearchRounded(
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
    createElement(Path, {"d":"M10.999999976489562,15.998779299956368H3.999999976489562c-1.104569499659192,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499670106,0,2,.895430500338989,2,2v6","key":"2"}),
    createElement(Path, {"d":"M5.999999976489562,5.998779299956368l5.35981560034088,4.466513000279519c.370845952638774.30903829386807.909522846679465.30903829386807,1.280368799329153,0l5.359815600329966-4.466513000279519","key":"3"})
  );
});

MailSearchRounded.displayName = 'MailSearchRounded';

export default MailSearchRounded;
export { MailSearchRounded };
