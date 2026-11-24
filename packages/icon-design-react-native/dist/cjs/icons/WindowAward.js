'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Polyline } = RNSvg;

const WindowAward = forwardRef(function WindowAward(
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
    createElement(Polyline, {"points":"16.579804040499766 19.118136527918978 19.611739251779909 22.150108181164796 20.208804438881998 20.358912619863986 22.000000000184627 19.761847432760987 19.292762714749188 17.054646589293952","key":"0"}),
    createElement(Circle, {"cx":"16.02934812917465","cy":"15.582391123052957","r":"3.582391122605145","key":"1"}),
    createElement(Polyline, {"points":"12.765933543599203 17.054646589293952 10.058696258164673 19.761847432760987 11.849891819468212 20.358912619863986 12.446957006569392 22.150108181164796 15.478892217850444 19.118136527918978","key":"2"}),
    createElement(Path, {"d":"M22.000000000184627,11.000000000448381v-7c0-1.10456949966192-.895430500338989-2-2-2H4.000000000184627c-1.104569499661011,0-2,.89543050033808-2,2v16c0,1.10456949966283.895430500338989,2,2,2h3","key":"3"}),
    createElement(Line, {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381","key":"4"}),
    createElement(Line, {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"5"}),
    createElement(Line, {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"6"}),
    createElement(Line, {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"7"})
  );
});

WindowAward.displayName = 'WindowAward';

module.exports = WindowAward;
module.exports.WindowAward = WindowAward;
module.exports.default = WindowAward;
