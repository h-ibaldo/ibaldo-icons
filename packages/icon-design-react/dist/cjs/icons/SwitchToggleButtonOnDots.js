'use strict';

const { createElement, forwardRef } = require('react');

const SwitchToggleButtonOnDots = forwardRef(function SwitchToggleButtonOnDots(
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
    createElement('rect', {"x":"1.999999988019908","y":"5.999996563894001","width":"20","height":"12.000000004577942","rx":"5.999993987784051","ry":"5.999993987784051","transform":"translate(23.999999973447217 23.999993134958544) rotate(-180)","key":"0"}),
    createElement('path', {"d":"M15.999999977100742,17.999996563434252c-3.313708498801134,0-6-2.686291501198866-6-6,0-3.313708498797496,2.686291501198866-6,6-6","key":"1"}),
    createElement('g', {"key":"2"},
      createElement('line', {"x1":"5.009999977100961","y1":"7.999996563434252","x2":"4.999999977100742","y2":"7.999996563434252","key":"0"}),
      createElement('line', {"x1":"8.009999977100961","y1":"7.999996563434252","x2":"7.999999977100742","y2":"7.999996563434252","key":"1"}),
      createElement('line', {"x1":"11.009999977100961","y1":"7.999996563434252","x2":"10.999999977100742","y2":"7.999996563434252","key":"2"}),
      createElement('line', {"x1":"3.009999977100961","y1":"9.999996563434252","x2":"2.999999977100742","y2":"9.999996563434252","key":"3"}),
      createElement('line', {"x1":"6.009999977100961","y1":"9.999996563434252","x2":"5.999999977100742","y2":"9.999996563434252","key":"4"}),
      createElement('line', {"x1":"5.009999977100961","y1":"11.999996563434252","x2":"4.999999977100742","y2":"11.999996563434252","key":"5"}),
      createElement('line', {"x1":"9.009999977100961","y1":"9.999996563434252","x2":"8.999999977100742","y2":"9.999996563434252","key":"6"}),
      createElement('line', {"x1":"8.009999977100961","y1":"11.999996563434252","x2":"7.999999977100742","y2":"11.999996563434252","key":"7"}),
      createElement('line', {"x1":"3.009999977100961","y1":"13.999996563434252","x2":"2.999999977100742","y2":"13.999996563434252","key":"8"}),
      createElement('line', {"x1":"6.009999977100961","y1":"13.999996563434252","x2":"5.999999977100742","y2":"13.999996563434252","key":"9"}),
      createElement('line', {"x1":"5.009999977100961","y1":"15.999996563434252","x2":"4.999999977100742","y2":"15.999996563434252","key":"10"}),
      createElement('line', {"x1":"9.009999977100961","y1":"13.999996563434252","x2":"8.999999977100742","y2":"13.999996563434252","key":"11"}),
      createElement('line', {"x1":"8.009999977100961","y1":"15.999996563434252","x2":"7.999999977100742","y2":"15.999996563434252","key":"12"}),
      createElement('line', {"x1":"11.009999977100961","y1":"15.999996563434252","x2":"10.999999977100742","y2":"15.999996563434252","key":"13"}))
  );
});

SwitchToggleButtonOnDots.displayName = 'SwitchToggleButtonOnDots';

module.exports = SwitchToggleButtonOnDots;
module.exports.SwitchToggleButtonOnDots = SwitchToggleButtonOnDots;
module.exports.default = SwitchToggleButtonOnDots;
