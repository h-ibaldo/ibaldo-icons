'use strict';

const { createElement, forwardRef } = require('react');

const MailboxPostFlagSquare = forwardRef(function MailboxPostFlagSquare(
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
    createElement('polyline', {"points":"15.945392090279711 9.999999999998181 15.945392090459791 1.999999999998181 20.94539209011964 2.000000000087311 20.945392090279711 4.000000000047294 20.945392090079622 5.999999999998181 15.945392090409769 5.999999999909051","key":"0"}),
    createElement('path', {"d":"M6.445387582665094,6.000000003105868h.000008976974665c2.483615176865385,0,4.499995591064733,2.016380414199348,4.499995591064733,4.499995591064733v7.500004405827637H2.945392058922304c-.551915024667888,0-1.000000000315064-.448084975647177-1.000000000315064-1.000000000315065v-6.50000447251945c0-2.48361513988328,2.016380384174573-4.499995524057855,4.499995524057854-4.499995524057855Z","key":"1"}),
    createElement('line', {"x1":"11.945392090279711","y1":"5.999999999998181","x2":"6.445392090279711","y2":"5.999999999998181","key":"2"}),
    createElement('path', {"d":"M10.945392090279711,17.999999999998181h10c.552284749830505,0,1-.447715250169495,1-1v-6.5c0-.52880859375-.10791015625-1.028686523439319-.275512695309772-1.5","key":"3"}),
    createElement('line', {"x1":"9.945392090279711","y1":"21.999999999998181","x2":"9.945392090279711","y2":"17.999999999998181","key":"4"}),
    createElement('line', {"x1":"13.945392090279711","y1":"21.999999999998181","x2":"13.945392090279711","y2":"17.999999999998181","key":"5"}),
    createElement('line', {"x1":"4.945392090279711","y1":"13.999999999998181","x2":"7.945392090279711","y2":"13.999999999998181","key":"6"})
  );
});

MailboxPostFlagSquare.displayName = 'MailboxPostFlagSquare';

module.exports = MailboxPostFlagSquare;
module.exports.MailboxPostFlagSquare = MailboxPostFlagSquare;
module.exports.default = MailboxPostFlagSquare;
