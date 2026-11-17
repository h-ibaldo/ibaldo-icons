'use strict';

const { createElement, forwardRef } = require('react');

const ChartLinePeakCircleMinus = forwardRef(function ChartLinePeakCircleMinus(
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
    createElement('polyline', {"points":"7 12 10 16 14 8 17 12","key":"0"}),
    createElement('line', {"x1":"17","y1":"5","x2":"21.999999999909051","y2":"4.999999999909051","key":"1"}),
    createElement('path', {"d":"M13,2.05047607421875c-.328857421869543-.03289794921875-.662353515619543-.05047607421875-1-.05047607421875C6.47705078125,2,2,6.4771728515625,2,12c0,5.52294921875,4.47705078125,10,10,10s10-4.47705078125,10-10c0-.68505859375-.069580078119543-1.353759765625-.200927734369543-2","key":"2"})
  );
});

ChartLinePeakCircleMinus.displayName = 'ChartLinePeakCircleMinus';

module.exports = ChartLinePeakCircleMinus;
module.exports.ChartLinePeakCircleMinus = ChartLinePeakCircleMinus;
module.exports.default = ChartLinePeakCircleMinus;
