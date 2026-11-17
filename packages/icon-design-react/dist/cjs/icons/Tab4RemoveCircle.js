'use strict';

const { createElement, forwardRef } = require('react');

const Tab4RemoveCircle = forwardRef(function Tab4RemoveCircle(
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
    createElement('path', {"d":"M10.0252685320811,21.99877930112325h-6c-1.104569499661011,0-2-.895430500338989-2-2V3.99877930112325c0-1.104569499661011.895430500338989-2,2-2h2c.629514606669545,0,1.222291236008459.296388314665819,1.599999999998545.799999999999272l2.100000000009459,2.799999999999272c.188854381991405.251805842668546.485242696660862.400000000001455.799999999991996.400000000001455h9.5c1.104569499668287,0,2,.895430500338989,2,2v2","key":"0"}),
    createElement('path', {"d":"M6.0252685320811,1.99877930112325h6c.629514606669545,0,1.222291236008459.296388314665819,1.599999999998545.799999999999272l2.400000000001455,3.200000000000728","key":"1"}),
    createElement('path', {"d":"M12.0252685320811,1.99877930112325h6c.629514606669545,0,1.222291236008459.296388314665819,1.599999999998545.799999999999272l1.799999999999272,2.400000000001455c.389466384411207.51928851253615.600000000002183,1.150889359324538.600000000002183,1.799999999999272v1","key":"2"}),
    createElement('g', {"key":"3"},
      createElement('circle', {"cx":"17.025268532090195","cy":"16.998779306063625","r":"5","key":"0"}),
      createElement('line', {"x1":"19.0252685320811","y1":"16.99877930112325","x2":"15.0252685320811","y2":"16.998779301301511","key":"1"}))
  );
});

Tab4RemoveCircle.displayName = 'Tab4RemoveCircle';

module.exports = Tab4RemoveCircle;
module.exports.Tab4RemoveCircle = Tab4RemoveCircle;
module.exports.default = Tab4RemoveCircle;
