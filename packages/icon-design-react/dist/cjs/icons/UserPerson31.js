"use strict";

const { forwardRef } = require('react');

const UserPerson31 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="9.000004289529898" y1="14.999999999998181" x2="9.000004289529898" y2="13.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.000004289529898" y1="14.999999999998181" x2="15.000004289529898" y2="13.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.829349992654898,15.815246582027612c.689331054685681-.315673828119543,1.170654296875-1.00750732421875,1.170654296875-1.815246582029431v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.170719621561148,15.815246582027612c.56658935546875,2.629943847659888,2.3980712890625,4.812255859380457,4.90081787109375,5.813354492191138.61334228515625.245361328119543,1.26788330078125.371398925779431,1.928466796875.371398925779431s1.31512451171875-.126037597659888,1.928466796875-.371398925779431c2.502807617185681-1.001098632810681,4.334228515625-3.18341064453125,4.90087890625-5.813354492191138" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.000004289529898,11.999999999998181v2c0,.807800292970569.481323242185681,1.499572753909888,1.17071533203125,1.815246582029431" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.000004289529898,11.999999999998181v-3c0-2.761420987730162-2.238573998212814-4.999995000000126-4.999995000000126-4.999995000000126h-.000004999999874V1.999999999998181h-4c-3.865993248817176,0-7,3.134006751179186-7,7v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.000004289529898,10.999999999998181v-.000001999998858c0-1.104568388791449.895429604906894-1.999998000001142,1.999998000001142-1.999998000001142h6.000003999997716c1.104568395094248,0,1.999998000001142.895429611209693,1.999998000001142,1.999998000001142v.000001999998858" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

UserPerson31.displayName = 'UserPerson31';

module.exports = UserPerson31;
module.exports.UserPerson31 = UserPerson31;
module.exports.default = UserPerson31;
