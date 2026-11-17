'use strict';

const { createElement, forwardRef } = require('react');

const SunShortRadiant = forwardRef(function SunShortRadiant(
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
    createElement('circle', {"cx":"12","cy":"11.999999999998181","r":"4","key":"0"}),
    createElement('line', {"x1":"12","y1":"21.999999999998181","x2":"12","y2":"20.999999999998181","key":"1"}),
    createElement('line', {"x1":"12","y1":"2.999999999998181","x2":"12","y2":"1.999999999998181","key":"2"}),
    createElement('line', {"x1":"2","y1":"11.999999999998181","x2":"3","y2":"11.999999999998181","key":"3"}),
    createElement('line', {"x1":"21","y1":"11.999999999998181","x2":"22","y2":"11.999999999998181","key":"4"}),
    createElement('line', {"x1":"4.928932188289764","y1":"19.071067812019464","x2":"5.63603896946006","y2":"18.363961030818245","key":"5"}),
    createElement('line', {"x1":"18.36396103053994","y1":"5.636038969178117","x2":"19.071067811710236","y2":"4.928932187978717","key":"6"}),
    createElement('line', {"x1":"4.928932187980536","y1":"4.928932188289764","x2":"5.636038969179936","y2":"5.636038969458241","key":"7"}),
    createElement('line', {"x1":"18.363961030820064","y1":"18.363961030538121","x2":"19.071067812019464","y2":"19.071067811708417","key":"8"}),
    createElement('line', {"x1":"15.826834323550429","y1":"21.238795325158208","x2":"15.444150891189565","y2":"20.314915792638203","key":"9"}),
    createElement('line', {"x1":"8.555849108810435","y1":"3.685084207358159","x2":"8.173165676449571","y2":"2.761204674838154","key":"10"}),
    createElement('line', {"x1":"2.761204674850887","y1":"15.82683432354861","x2":"3.685084207359978","y2":"15.444150891187746","key":"11"}),
    createElement('line', {"x1":"20.314915792640022","y1":"8.555849108808616","x2":"21.238795325160027","y2":"8.173165676449571","key":"12"}),
    createElement('line', {"x1":"8.173165676449571","y1":"21.238795325149113","x2":"8.555849108810435","y2":"20.314915792638203","key":"13"}),
    createElement('line', {"x1":"15.444150891189565","y1":"3.685084207358159","x2":"15.826834323550429","y2":"2.761204674838154","key":"14"}),
    createElement('line', {"x1":"2.761204674850887","y1":"8.173165676449571","x2":"3.685084207359978","y2":"8.555849108808616","key":"15"}),
    createElement('line', {"x1":"20.314915792640022","y1":"15.444150891187746","x2":"21.238795325160027","y2":"15.82683432354861","key":"16"})
  );
});

SunShortRadiant.displayName = 'SunShortRadiant';

module.exports = SunShortRadiant;
module.exports.SunShortRadiant = SunShortRadiant;
module.exports.default = SunShortRadiant;
