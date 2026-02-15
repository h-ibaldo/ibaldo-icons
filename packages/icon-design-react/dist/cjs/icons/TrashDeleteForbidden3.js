"use strict";

const { forwardRef } = require('react');

const TrashDeleteForbidden3 = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  React.createElement('svg', {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M8.97473145010008,22.000000000459295h-2.000000000020009c-1.104569499660101,0-2-.89543050033717-2-2V6.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.97473145010008" y1="6.000000000462023" x2="15.97473145010008" y2="9.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.974731450080071" y1="6.000000000462023" x2="17.97473145010008" y2="6.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.97473145010008" y1="2.000000000459295" x2="12.97473145010008" y2="2.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="15.941799467210103" cy="17.032932035377598" r="5.032931982879632" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.382979132779838" y1="20.591752369644382" x2="19.500619801639914" y2="13.474111701115362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TrashDeleteForbidden3.displayName = 'TrashDeleteForbidden3';

module.exports = TrashDeleteForbidden3;
module.exports.TrashDeleteForbidden3 = TrashDeleteForbidden3;
module.exports.default = TrashDeleteForbidden3;
