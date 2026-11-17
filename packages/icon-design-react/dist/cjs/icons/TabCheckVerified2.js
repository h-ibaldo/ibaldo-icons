'use strict';

const { createElement, forwardRef } = require('react');

const TabCheckVerified2 = forwardRef(function TabCheckVerified2(
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
    createElement('path', {"d":"M8.050537104500108,1.997565477288845h8.558125457539973c.911351166329951,0,1.773289868139727.414269157099625,2.342606428320323,1.125914857337193l2.441874542459118,3.052343178074807c.425551315510347.531939144388161.657393571680586,1.192870657007006.657393571680586,1.874085142663716v.947656821924284","key":"0"}),
    createElement('path', {"d":"M12.050537104500108,21.997565477288845H4.050537104500108c-1.104569499670106,0-2-.895430500338989-2-2V3.997565477288845c0-1.104569499661011.895430500329894-2,2-2h3.558125457539973c.911351166329951,0,1.773289868139727.414269157099625,2.342606428320323,1.125914857333555l2.198536228269404,2.748170285330161c.5693165601906.711645700236659,1.431255261990373,1.125914857336284,2.342606428320323,1.125914857336284h5.558125457549977c1.104569499660101,0,2,.895430500338989,2,2v3.999999999996362","key":"1"}),
    createElement('polyline', {"points":"22.050537104500108 16.997565477285207 18.050537104500108 21.997565477285207 15.050537104500108 18.997565477285207","key":"2"})
  );
});

TabCheckVerified2.displayName = 'TabCheckVerified2';

module.exports = TabCheckVerified2;
module.exports.TabCheckVerified2 = TabCheckVerified2;
module.exports.default = TabCheckVerified2;
