'use strict';

const { createElement, forwardRef } = require('react');

const ArrowsDownInput1 = forwardRef(function ArrowsDownInput1(
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
    createElement('path', {"d":"M1.974731449501633,17.000000000480213v2c0,1.104569499661011.895430500340808,2,2,2h16c1.104569499661011,0,2-.895430500338989,2-2v-2","key":"0"}),
    createElement('polyline', {"points":"9.974731449501633 15.000000000480213 11.974731449501633 17.000000000480213 13.974731449501633 15.000000000480213","key":"1"}),
    createElement('polyline', {"points":"15.974731449501633 11.000000000480213 17.974731449501633 13.000000000480213 19.974731449501633 11.000000000480213","key":"2"}),
    createElement('polyline', {"points":"3.974731449501633 11.000000000480213 5.974731449501633 13.000000000480213 7.974731449501633 11.000000000480213","key":"3"}),
    createElement('path', {"d":"M21.974731449501633,3.000000000479304h-.000003999997716c-2.209136777589265,0-3.999996000002284,1.790859209815608-3.999996000002284,3.999995999999555v6.000004000001354","key":"4"}),
    createElement('path', {"d":"M1.974731449501633,3.000000000567525h.000003999999535c2.209136896799464-.000000000088221,3.9999960000805,1.790859209640075,3.999996000181454,3.999995999820385l.000000000224645,6.000004000001354","key":"5"}),
    createElement('line', {"x1":"11.974731449501633","y1":"17.000000000480213","x2":"11.974731449501633","y2":"4.000000000479304","key":"6"})
  );
});

ArrowsDownInput1.displayName = 'ArrowsDownInput1';

module.exports = ArrowsDownInput1;
module.exports.ArrowsDownInput1 = ArrowsDownInput1;
module.exports.default = ArrowsDownInput1;
