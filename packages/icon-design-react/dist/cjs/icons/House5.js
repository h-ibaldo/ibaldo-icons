"use strict";

const { forwardRef } = require('react');

const House5 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M11.350651399779963,2.500528801292603L2.374341435499446,9.699768210253751c-.236643122669193.189794080346473-.374341435319366.476746133219422-.374341435319366.780097019887762v10.520134770700679c0,.552284749828686.447715250169495,1,1,1h18c.552284749830505,0,1-.447715250171314,1-1v-10.51861742273104c0-.304215286410908-.138480516779964-.591887760059763-.376266452700293-.78163703978862L12.6000435117694,2.498988781391745c-.365579069888554-.291726106188435-.884533324049698-.291086435208854-1.249392111989437.001540019900858Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

House5.displayName = 'House5';

module.exports = House5;
module.exports.House5 = House5;
module.exports.default = House5;
