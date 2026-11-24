'use strict';

const { createElement, forwardRef } = require('react');

const WalletCards = forwardRef(function WalletCards(
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
    createElement('path', {"d":"M4 8L20 8C21.105 8 22 8.895 22 10L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 10C2 8.895 2.895 8 4 8Z","key":"0"}),
    createElement('path', {"d":"M2 12L22 12","key":"1"}),
    createElement('path', {"d":"M4 8L16.941 2.824C18.043 2.383 19.281 2.992 19.609 4.129L20.758 8.148","key":"2"})
  );
});

WalletCards.displayName = 'WalletCards';

module.exports = WalletCards;
module.exports.WalletCards = WalletCards;
module.exports.default = WalletCards;
