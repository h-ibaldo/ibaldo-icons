"use strict";

const { forwardRef } = require('react');

const TrashArrowUpRestore1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="3.974731450060062" y="6.000000000459295" width="16" height="3" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.974731450060062,9.000000000459295v11c0,1.104569499661011-.895430500339899,2-2,2H7.974731450060062c-1.104569499660101,0-2-.895430500338989-2-2v-11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.974731450060062,6.000000000459295v-2.353921007723329c0-.909104324451619-.736974667819595-1.646078992279399-1.646078992280309-1.646078992279399h-2.707842015439383c-.909104324450709,0-1.646078992280309.736974667827781-1.646078992280309,1.646078992279399v2.353921007723329" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.97473145010008 15.000000000459295 11.97473145010008 13.000000000459295 13.97473145010008 15.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.97473145010008" y1="18.000000000459295" x2="11.97473145010008" y2="13.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TrashArrowUpRestore1.displayName = 'TrashArrowUpRestore1';

module.exports = TrashArrowUpRestore1;
module.exports.TrashArrowUpRestore1 = TrashArrowUpRestore1;
module.exports.default = TrashArrowUpRestore1;
