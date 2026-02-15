"use strict";

const { forwardRef } = require('react');

const SirenAlarmAlertNotification1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M6.06559112244031,18.000000003885361h11.868817764057894c1.140030772469583,0,2.065591117971053.92556034550147,2.065591117971053,2.065591117971053v1.934408882028947H4.000000004469257v-1.934408882028947c0-1.140030772469583.92556034550147-2.065591117971053,2.065591117971053-2.065591117971053Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.999995001551838,7.000000003052833h.000010001213138c2.759572361842324,0,4.999994998092905,2.240422636250582,4.999994998092905,4.999994998092905v6.000005002739623H7.000000014203806v-6.000005013484497c0-2.759572355912066,2.240422631435965-4.999994987348032,4.999994987348032-4.999994987348032Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000004469257" y1="2.000000003885361" x2="12.000000004469257" y2="4.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.000000004469257" y1="3.000000003885361" x2="16.000000004469257" y2="5.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.000000004469257" y1="8.000000003885361" x2="21.000000004469257" y2="7.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.000000004469257" y1="12.000000003885361" x2="22.000000004469257" y2="12.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.000000004070898" y1="3.000000003794412" x2="8.000000004150934" y2="5.000000003754394" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.000000004280082" y1="8.000000003885361" x2="3.000000004240064" y2="7.000000003976311" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.000000004469257" y1="12.000000003936293" x2="2.000000004469257" y2="12.000000004016329" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SirenAlarmAlertNotification1.displayName = 'SirenAlarmAlertNotification1';

module.exports = SirenAlarmAlertNotification1;
module.exports.SirenAlarmAlertNotification1 = SirenAlarmAlertNotification1;
module.exports.default = SirenAlarmAlertNotification1;
