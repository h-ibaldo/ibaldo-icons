'use strict';

const { createElement, forwardRef } = require('react');

const MailboxMail = forwardRef(function MailboxMail(
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
    createElement('polyline', {"points":"17.945392090279711 9.999999999998181 17.945392090459791 3.999999999998181 19.945392090279711 4.000000000087311 19.945392090279711 4.999999999998181 17.945392090279711 4.999999999998181","key":"0"}),
    createElement('line', {"x1":"8.945392090279711","y1":"4.999999999998181","x2":"14.945392090279711","y2":"4.999999999998181","key":"1"}),
    createElement('polyline', {"points":"13.945392090279711 11.999999999998181 7.945392090279711 15.999999999998181 1.945392090279711 11.999999999998181","key":"2"}),
    createElement('path', {"d":"M13.945392090279711,19.999999999998181H2.945392090279711c-.552284749829596,0-1-.447715250169495-1-1v-7c0-.552284749830505.447715250170404-1,1-1h11","key":"3"}),
    createElement('path', {"d":"M13.945392090279711,19.999999999998181v-10.000004999999874c0-2.761420987730162-2.238574012269964-4.999995000000126-4.999995000000126-4.999995000000126h-.000009999999747c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999995000000126v1.000004999999874","key":"4"}),
    createElement('path', {"d":"M13.945392090279711,19.999999999998181h8v-10c0-.712219238279431-.15380859375-1.386779785159888-.422119140629547-2","key":"5"})
  );
});

MailboxMail.displayName = 'MailboxMail';

module.exports = MailboxMail;
module.exports.MailboxMail = MailboxMail;
module.exports.default = MailboxMail;
