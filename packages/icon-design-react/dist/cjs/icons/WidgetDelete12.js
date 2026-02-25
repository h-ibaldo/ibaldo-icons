"use strict";

const { forwardRef } = require('react');

const WidgetDelete12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M12.974731450040053,20.000000000459295H4.674731450039872c-1.491168824550186,0-2.699999999999818-1.208831175426894-2.699999999999818-2.699999999932515V4.700000000840191c0-1.491168824505621,1.208831175449632-2.699999999931606,2.699999999999818-2.699999999931606h12.600000000000364c1.491168824540182,0,2.699999999999818,1.208831175425985,2.699999999999818,2.699999999931606v8.299999999619104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.974731450040053" y1="17.000000000462023" x2="16.974731450040053" y2="22.000000000462933" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.974731450040053" y1="22.000000000462933" x2="16.974731450040053" y2="17.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="10.974731450040053" cy="11.000000000459295" r="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731450040053" y1="11.010000000460423" x2="10.974731450040053" y2="11.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731450040053" y1="6.000000000459295" x2="10.974731450040053" y2="7.500000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731450040053" y1="14.500000000459295" x2="10.974731450040053" y2="16.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.974731450040053" y1="11.000000000459295" x2="14.474731450040053" y2="11.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.474731450040053" y1="11.000000000459295" x2="5.974731450040053" y2="11.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.510265356049786" y1="14.535533906310775" x2="13.449605184249776" y2="13.474873734555331" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.499857715830331" y1="8.52512626636053" x2="7.439197544030321" y2="7.464466094604177" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.439197544190392" y1="14.535533906469936" x2="8.499857715940379" y2="13.474873734666289" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.449605184139727" y1="8.525126266248662" x2="14.510265355889715" y2="7.464466094445925" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WidgetDelete12.displayName = 'WidgetDelete12';

module.exports = WidgetDelete12;
module.exports.WidgetDelete12 = WidgetDelete12;
module.exports.default = WidgetDelete12;
