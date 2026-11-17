'use strict';

const { createElement, forwardRef } = require('react');

const Binoculars11 = forwardRef(function Binoculars11(
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
    createElement('circle', {"cx":"17.999988017749274","cy":"15.936828613188482","r":"4","key":"0"}),
    createElement('circle', {"cx":"5.999988017749274","cy":"15.936828613188482","r":"4","key":"1"}),
    createElement('path', {"d":"M9.999988017749274,8.936828613188482v-1.751708984369543c0-1.794006347659888-1.454345703128638-3.248291015630457-3.248291015628638-3.248291015630457-1.587890625,0-2.943115234371362,1.148010253909888-3.2041015625,2.714294433599207l-1.351684570319776,8.110107421871362","key":"2"}),
    createElement('path', {"d":"M21.804065166190412,14.761230468659051l-1.351684570319776-8.110107421871362c-.260986328121362-1.566284179689319-1.6162109375-2.714294433599207-3.2041015625-2.714294433599207-1.7939453125,0-3.248291015621362,1.454284667970569-3.248291015621362,3.248291015630457v1.751708984369543","key":"3"}),
    createElement('line', {"x1":"9.999988017749274","y1":"15.936828613008402","x2":"13.999988017749274","y2":"15.936828613008402","key":"4"}),
    createElement('line', {"x1":"9.999988017749274","y1":"8.936828613008402","x2":"13.999988017749274","y2":"8.936828613008402","key":"5"})
  );
});

Binoculars11.displayName = 'Binoculars11';

module.exports = Binoculars11;
module.exports.Binoculars11 = Binoculars11;
module.exports.default = Binoculars11;
