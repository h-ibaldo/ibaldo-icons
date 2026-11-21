'use strict';

const { createElement, forwardRef } = require('react');

const WalletTabRound = forwardRef(function WalletTabRound(
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
    createElement('path', {"d":"M21 15L21 17.793C21 19.563 19.637 21 17.953 21L3 21C2.449 21 2 20.551 2 20L2 4C2 3.449 2.449 3 3 3L17.953 3C19.637 3 21 4.438 21 6.207L21 8","key":"0"}),
    createElement('path', {"d":"M22 15L14.5 15C12.566 15 11 13.434 11 11.5C11 9.566 12.566 8 14.5 8L22 8Z","key":"1"}),
    createElement('path', {"d":"M14.5 11C14.223 11 14 11.223 14 11.5C14 11.777 14.223 12 14.5 12C14.777 12 15 11.777 15 11.5C15 11.223 14.777 11 14.5 11Z","key":"2"})
  );
});

WalletTabRound.displayName = 'WalletTabRound';

module.exports = WalletTabRound;
module.exports.WalletTabRound = WalletTabRound;
module.exports.default = WalletTabRound;
