'use strict';

const { createElement, forwardRef } = require('react');

const FormUserTooltip = forwardRef(function FormUserTooltip(
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
    createElement('path', {"d":"M17,21H4c-1.104569499661011,0-2-.895430500338989-2-2V5c0-1.104569499661011.895430500338989-2,2-2h13c1.104569499661011,0,2,.895430500338989,2,2v3.585786437626666c0,.265216489839077.105356840369495.519570402739191.292893218809695.707106781185757l2.707106781190305,2.707106781187576-2.707106781190305,2.707106781189395c-.1875363784402.187536378444747-.292893218809695.441890291344862-.292893218809695.707106781183938v3.585786437626666c0,1.104569499661011-.895430500338989,2-2,2Z","key":"0"}),
    createElement('circle', {"cx":"10.5","cy":"10.5","r":"2.5","key":"1"}),
    createElement('path', {"d":"M7.000000013040335,15.999999960884452c.000000021600499-1.656854234217462,1.3431457657789-2.999999960884452,3-2.999999960884452h.999999978259439c1.656854239299719,0,2.999999985589966,1.343145734605059,3,2.999999973904778","key":"2"})
  );
});

FormUserTooltip.displayName = 'FormUserTooltip';

module.exports = FormUserTooltip;
module.exports.FormUserTooltip = FormUserTooltip;
module.exports.default = FormUserTooltip;
