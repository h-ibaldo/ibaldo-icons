'use strict';

const { createElement, forwardRef } = require('react');

const ChartArrowUpCirclePlus = forwardRef(function ChartArrowUpCirclePlus(
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
    createElement('line', {"x1":"19.5","y1":"7.499999999909051","x2":"19.499999999909051","y2":"2.5","key":"0"}),
    createElement('line', {"x1":"17","y1":"5","x2":"21.999999999909051","y2":"4.999999999909051","key":"1"}),
    createElement('polyline', {"points":"7 15.000000000181899 10 12.000000000181899 12 14.000000000181899 16 10.000000000181899","key":"2"}),
    createElement('polyline', {"points":"16 13.000000000181899 16 10.000000000181899 13 10.000000000181899","key":"3"}),
    createElement('path', {"d":"M14,2.200927734375c-.646240234369543-.13134765625-1.31494140625-.200927734375-2-.200927734375C6.47705078125,2,2,6.4771728515625,2,12c0,5.52294921875,4.47705078125,10,10,10s10-4.47705078125,10-10c0-.33758544921875-.017578125-.67108154296875-.050537109369543-1","key":"4"})
  );
});

ChartArrowUpCirclePlus.displayName = 'ChartArrowUpCirclePlus';

module.exports = ChartArrowUpCirclePlus;
module.exports.ChartArrowUpCirclePlus = ChartArrowUpCirclePlus;
module.exports.default = ChartArrowUpCirclePlus;
