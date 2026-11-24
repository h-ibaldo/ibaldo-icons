import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const WindowChatBare = forwardRef(function WindowChatBare(
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
    createElement(Path, {"d":"M8.00000000018008,22.000000000448381l-4,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v4","key":"0"}),
    createElement(Path, {"d":"M9.890557941269435,14.000000000448381v3c0,1.104569499661011.895430500329894,2,2,2h1v3l4-3h3c1.104569499650097,0,2-.895430500338989,2-2v-3c0-1.104569499661011-.895430500349903-2-2-2h-8c-1.104569499670106,0-2,.895430500338989-2,2Z","key":"1"}),
    createElement(Line, {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"2"}),
    createElement(Line, {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement(Line, {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"4"})
  );
});

WindowChatBare.displayName = 'WindowChatBare';

export default WindowChatBare;
export { WindowChatBare };
