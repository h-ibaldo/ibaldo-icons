"use strict";

const { forwardRef } = require('react');

const Bell1NotificationAlarmAlert = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M14.000000004471076,18.000000003885361v2.000002000001587c0,1.1045683950897-.895429604921446,1.999997999998413-1.999998000010237,1.999997999998413h-.000004000001354c-1.10456839509061,0-1.999997999988409-.895429604908713-1.999997999988409-1.999997999998413v-2.000002000001587" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.999996002282324,14.000000009170463h10.000007985209802c1.655742863505179,0,2.99999599580239,1.344253132297212,2.99999599580239,2.99999599580239v.000003998614051c0,.551915023255717-.448084974500674.99999999775639-.99999999775639.99999999775639H4.999999998226969c-.551915020947453,0-.999999993574107-.448084972626653-.999999993574107-.999999993574107v-.000004000969263c0-1.655742864513567,1.344253133115896-2.999995997629462,2.999995997629463-2.999995997629462Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.000000004471076,14.000000003885361v-6c0-3.313705185278195,2.68628881470795-5.999993999997969,5.999993999988874-5.999993999997969h.000012000000424c3.313705185279105,0,5.999994000010702,2.686288814719774,5.999994000010702,5.999993999997969v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bell1NotificationAlarmAlert.displayName = 'Bell1NotificationAlarmAlert';

module.exports = Bell1NotificationAlarmAlert;
module.exports.Bell1NotificationAlarmAlert = Bell1NotificationAlarmAlert;
module.exports.default = Bell1NotificationAlarmAlert;
