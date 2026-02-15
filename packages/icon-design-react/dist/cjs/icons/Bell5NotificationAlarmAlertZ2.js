"use strict";

const { forwardRef } = require('react');

const Bell5NotificationAlarmAlertZ2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="19.974731449503452" y1="17.000000000480213" x2="3.974731449503452" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.974731449503452,17.000000000480213v-8.000006000002031c0-3.313705185279105-2.686288814724321-5.999993999997969-5.999993999999788-5.999993999997969h-.000012000000424c-3.313705185275467,0-5.999993999999788,2.686288814718864-5.999993999999788,5.999993999997969v8.000006000002031" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731449503452" y1="21.000000000480213" x2="13.974731449503452" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.974731449503452 8.000000000480213 13.974731449503452 8.000000000480213 9.974731449503452 13.000000000480213 13.974731449503452 13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bell5NotificationAlarmAlertZ2.displayName = 'Bell5NotificationAlarmAlertZ2';

module.exports = Bell5NotificationAlarmAlertZ2;
module.exports.Bell5NotificationAlarmAlertZ2 = Bell5NotificationAlarmAlertZ2;
module.exports.default = Bell5NotificationAlarmAlertZ2;
