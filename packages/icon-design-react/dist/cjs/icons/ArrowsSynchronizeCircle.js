'use strict';

const { createElement, forwardRef } = require('react');

const ArrowsSynchronizeCircle = forwardRef(function ArrowsSynchronizeCircle(
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
    createElement('polyline', {"points":"18.722375872726843 13.243528772367426 16.999999999818101 10.999999999998181 14.756471227454313 12.722375872908742","key":"0"}),
    createElement('circle', {"cx":"12","cy":"11.999999999998181","r":"10","key":"1"}),
    createElement('path', {"d":"M9.0274658203125,15.999999999998181c.832763671875.6201171875,1.85443115234375,1,2.9725341796875,1,2.76141357421875,0,5-2.238525390630457,5-5,0-.31787109375-.036743164061591-.626708984380457-.093505859375-.92822265625","key":"2"}),
    createElement('polyline', {"points":"5.277624127385934 10.756471227017755 7.000000000092768 12.999999999548891 9.243528772611171 11.277624126838418","key":"3"}),
    createElement('path', {"d":"M14.97253418004766,8.000000000258296c-.83276367182043-.620117187569122-1.854431152252801-1.000000000160071-2.972534179596551-1.000000000260115-2.761413574220569-.000000000249202-5.000000000201908,2.238525390170253-5.000000000451109,4.99999999955071-.000000000027285.31787109375.03674316400793.626708984378638.093505859291326.928222656259095","key":"4"})
  );
});

ArrowsSynchronizeCircle.displayName = 'ArrowsSynchronizeCircle';

module.exports = ArrowsSynchronizeCircle;
module.exports.ArrowsSynchronizeCircle = ArrowsSynchronizeCircle;
module.exports.default = ArrowsSynchronizeCircle;
