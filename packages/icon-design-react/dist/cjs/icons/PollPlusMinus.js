'use strict';

const { createElement, forwardRef } = require('react');

const PollPlusMinus = forwardRef(function PollPlusMinus(
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
    createElement('polyline', {"points":"2.025268534409406 21.99999999837928 2.025268534949646 9.99999999837928 6.025268534949646 9.999999998561179 6.025268534409406 21.999999998561179","key":"0"}),
    createElement('polyline', {"points":"10.025268534409406 21.99999999873944 10.025268534591305 17.99999999873944 14.025268534591305 17.999999998921339 14.025268534409406 21.999999998917701","key":"1"}),
    createElement('polyline', {"points":"18.025268534409406 21.9999999990996 18.025268534769566 13.9999999990996 22.025268534769566 13.999999999277861 22.025268534409406 21.999999999277861","key":"2"}),
    createElement('line', {"x1":"4.025268535129726","y1":"5.99999999847023","x2":"4.025268535309806","y2":"1.99999999847023","key":"3"}),
    createElement('line', {"x1":"2.025268535220675","y1":"3.99999999837928","x2":"6.025268535220675","y2":"3.999999998561179","key":"4"}),
    createElement('line', {"x1":"20.025268534949646","y1":"9.999999999186912","x2":"20.025268535129726","y2":"5.999999999186912","key":"5"}),
    createElement('line', {"x1":"10.025268534409406","y1":"12.99999999883039","x2":"14.025268534409406","y2":"12.999999999012289","key":"6"}),
    createElement('line', {"x1":"18.025268535040595","y1":"7.9999999990996","x2":"22.025268535040595","y2":"7.999999999277861","key":"7"})
  );
});

PollPlusMinus.displayName = 'PollPlusMinus';

module.exports = PollPlusMinus;
module.exports.PollPlusMinus = PollPlusMinus;
module.exports.default = PollPlusMinus;
