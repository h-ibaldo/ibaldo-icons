"use strict";

const { forwardRef } = require('react');

const DTouch2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="11.999999972060323" y1="2.009996564601352" x2="11.999999972060323" y2="1.999996564601133" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999972060323" y1="21.989996564600915" x2="11.999999972060323" y2="21.999996564601133" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999972060323" y1="12.009996564601352" x2="21.999999972060323" y2="11.999996564601133" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999972060323" y1="12.009996564601352" x2="1.999999972060323" y2="11.999996564601133" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.071067783770559" y1="4.938928752578249" x2="19.071067783770559" y2="4.928928752578031" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.928932160350087" y1="19.081064376628092" x2="4.928932160350087" y2="19.071064376627874" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.071067784079787" y1="19.081064376308859" x2="19.071067784079787" y2="19.071064376308641" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.928932160040858" y1="4.938928752896572" x2="4.928932160040858" y2="4.928928752894535" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.826834295610752" y1="2.771201239446782" x2="15.826834295610752" y2="2.761201239446564" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.173165648509894" y1="21.24879188975865" x2="8.173165648509894" y2="21.238791889757522" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.238795297209435" y1="15.836830888148143" x2="21.238795297209435" y2="15.826830888147924" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.761204646900296" y1="8.183162241054561" x2="2.761204646900296" y2="8.173162241054342" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.238795297040269" y1="8.183162240638922" x2="21.238795297040269" y2="8.173162240638703" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.761204647069462" y1="15.83683088856651" x2="2.761204647069462" y2="15.826830888566292" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.826834296020024" y1="21.248791889586755" x2="15.826834296020024" y2="21.238791889586537" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.173165648100621" y1="2.771201239619586" x2="8.173165648100621" y2="2.761201239619368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999972060323" cy="11.999996564601133" r="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999972060323" cy="11.999996564601133" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999972060323" cy="11.999996564601133" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DTouch2.displayName = 'DTouch2';

module.exports = DTouch2;
module.exports.DTouch2 = DTouch2;
module.exports.default = DTouch2;
