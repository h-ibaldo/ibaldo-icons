'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const TabMinus = forwardRef(function TabMinus(
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
    createElement(Path, {"d":"M8.025268554200011,1.998782737328838h8.558125457540882c.911351166329041,0,1.773289868129723.414269157099625,2.342606428319414,1.125914857337193l2.441874542459118,3.052343178074807c.425551315511257.531939144388161.657393571680586,1.192870657007006.657393571680586,1.874085142662807v.947656821925193","key":"0"}),
    createElement(Path, {"d":"M12.12453666833062,21.998782737328838H4.025268554200011c-1.104569499670106,0-2-.895430500338989-2-2V3.998782737328838c0-1.104569499661011.895430500329894-2,2-2h3.558125457540882c.911351166329041,0,1.773289868129723.414269157099625,2.342606428319414,1.125914857337193l2.198536228270314,2.748170285329252c.569316560189691.71164570023393,1.431255261990373,1.125914857333555,2.342606428319414,1.125914857333555h5.558125457549977c1.104569499661011,0,2,.895430500338989,2,2v5","key":"1"}),
    createElement(Line, {"x1":"16.025268554200011","y1":"18.998782737328838","x2":"22.025268554200011","y2":"18.998782737328838","key":"2"})
  );
});

TabMinus.displayName = 'TabMinus';

module.exports = TabMinus;
module.exports.TabMinus = TabMinus;
module.exports.default = TabMinus;
