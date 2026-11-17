'use strict';

const { createElement, forwardRef } = require('react');

const TabSettings = forwardRef(function TabSettings(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M8,1.997565474109251h8.558125457529968c.911351166339955,0,1.773289868149732.414269157099625,2.342606428330328,1.125914857337193l2.441874542459118,3.052343178074807c.425551315500343.531939144388161.657393571680586,1.192870657007006.657393571680586,1.874085142662807v.947656821925193","key":"0"}),
    createElement('path', {"d":"M20,21.997565474109251H4c-1.104569499670106,0-2-.895430500338989-2-2V3.997565474109251c0-1.104569499661011.895430500329894-2,2-2h3.558125457529968c.911351166339955,0,1.773289868149732.414269157099625,2.342606428330328,1.125914857337193l2.198536228248486,2.748170285325614c.569316560211519.711645700236659,1.431255262001287,1.125914857337193,2.342606428341242,1.125914857337193h5.558125457549977c1.104569499650097,0,2,.895430500338989,2,2v11c0,1.104569499661011-.895430500349903,2-2,2Z","key":"1"}),
    createElement('line', {"x1":"8","y1":"14.00756547410947","x2":"8","y2":"13.997565474109251","key":"2"}),
    createElement('line', {"x1":"12","y1":"14.00756547410947","x2":"12","y2":"13.997565474109251","key":"3"}),
    createElement('line', {"x1":"16","y1":"14.00756547410947","x2":"16","y2":"13.997565474109251","key":"4"})
  );
});

TabSettings.displayName = 'TabSettings';

module.exports = TabSettings;
module.exports.TabSettings = TabSettings;
module.exports.default = TabSettings;
