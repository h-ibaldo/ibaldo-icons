import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const WindowChat = forwardRef(function WindowChat(
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
    createElement(Path, {"d":"M9.890557941264888,14.000000000448381v3c0,1.104569499661011.895430500338989,2,2,2h1v3l4-3h3c1.104569499661011,0,2-.895430500338989,2-2v-3c0-1.104569499661011-.895430500338989-2-2-2h-8c-1.104569499661011,0-2,.895430500338989-2,2Z","key":"0"}),
    createElement(Path, {"d":"M22.000000000184627,9.000000000448381v-5c0-1.10456949966192-.895430500338989-2-2-2H4.000000000184627c-1.104569499661011,0-2,.89543050033808-2,2v16c0,1.10456949966283.895430500338989,2,2,2h5","key":"1"}),
    createElement(Line, {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381","key":"2"}),
    createElement(Line, {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"3"}),
    createElement(Line, {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"4"}),
    createElement(Line, {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"5"})
  );
});

WindowChat.displayName = 'WindowChat';

export default WindowChat;
export { WindowChat };
