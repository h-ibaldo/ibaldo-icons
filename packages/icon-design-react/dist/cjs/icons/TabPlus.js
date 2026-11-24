'use strict';

const { createElement, forwardRef } = require('react');

const TabPlus = forwardRef(function TabPlus(
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
    createElement('path', {"d":"M8.025268532090195,1.99877930112325h8.558125457539063c.91135116633086,0,1.773289868131542.414269157099625,2.342606428321233,1.125914857337193l2.441874542459118,3.052343178074807c.425551315509438.531939144388161.657393571680586,1.192870657007006.657393571680586,1.874085142662807v.947656821925193","key":"0"}),
    createElement('path', {"d":"M13.124536646220804,21.99877930112325H4.025268532090195c-1.104569499670106,0-2-.895430500338989-2-2V3.99877930112325c0-1.104569499661011.895430500329894-2,2-2h3.558125457539063c.91135116633086,0,1.773289868131542.414269157099625,2.342606428321233,1.125914857333555l2.198536228270314,2.748170285329252c.569316560189691.711645700237568,1.431255261988554,1.125914857337193,2.342606428319414,1.125914857337193h5.558125457549977c1.104569499659192,0,2,.895430500338989,2,2v4","key":"1"}),
    createElement('line', {"x1":"19.025268532090195","y1":"21.998779301119612","x2":"19.025268532090195","y2":"15.998779301119612","key":"2"}),
    createElement('line', {"x1":"16.025268532090195","y1":"18.998779301119612","x2":"22.025268532090195","y2":"18.998779301119612","key":"3"})
  );
});

TabPlus.displayName = 'TabPlus';

module.exports = TabPlus;
module.exports.TabPlus = TabPlus;
module.exports.default = TabPlus;
