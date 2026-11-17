'use strict';

const { createElement, forwardRef } = require('react');

const MailboxFlag = forwardRef(function MailboxFlag(
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
    createElement('path', {"d":"M5.945388090275658,5.999999999504098h.000008013860243c2.207657879967615,0,3.999995981250217,1.792338101282603,3.999995981250217,3.999995981250217v10.000004019243866H1.945392117726499v-10.000004027944925c0-2.207657875165371,1.792338097383789-3.999995972549158,3.999995972549159-3.999995972549158Z","key":"0"}),
    createElement('line', {"x1":"4.945392090279711","y1":"10.999999999998181","x2":"6.945392090279711","y2":"10.999999999998181","key":"1"}),
    createElement('polyline', {"points":"14.945392090189671 9.999999999998181 14.945392090369751 3.999999999998181 17.945392090279711 4.000000000087311 17.945392090229689 5.000000000087311 14.945392090319729 4.999999999998181","key":"2"}),
    createElement('line', {"x1":"10.945392090279711","y1":"5.999999999998181","x2":"5.945392090279711","y2":"5.999999999998181","key":"3"}),
    createElement('path', {"d":"M9.945392090279711,19.999999999998181h12v-10c0-1.205078125-.544311523439319-2.270141601560681-1.3896484375-3","key":"4"})
  );
});

MailboxFlag.displayName = 'MailboxFlag';

module.exports = MailboxFlag;
module.exports.MailboxFlag = MailboxFlag;
module.exports.default = MailboxFlag;
