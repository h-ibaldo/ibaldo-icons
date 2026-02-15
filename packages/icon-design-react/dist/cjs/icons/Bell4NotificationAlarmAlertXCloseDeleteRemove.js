"use strict";

const { forwardRef } = require('react');

const Bell4NotificationAlarmAlertXCloseDeleteRemove = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M13.974731449501633,17.000000000480213v2.000002000000677c0,1.104568395086972-.895429604906894,1.999997999999323-1.999997999998413,1.999997999999323h-.000004000000445c-1.10456839509061,0-1.999998000001142-.895429604912351-1.999998000001142-1.999997999999323v-2.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.974731449501633" y1="17.000000000480213" x2="3.974731449501633" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.974731449501633,17.000000000480213v-7.000006000002031c0-3.313705185279105-2.686288814723412-5.999993999997969-5.999993999997969-5.999993999997969h-.000012000001334c-3.313705185274557,0-5.999994000000697,2.686288814718864-5.999994000000697,5.999993999997969v7.000006000002031" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731449501633" y1="2.000000000480213" x2="11.974731449501633" y2="4.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731449501633" y1="13.000000000480213" x2="13.974731449501633" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.974731449501633" y1="13.000000000480213" x2="9.974731449390674" y2="9.000000000589353" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bell4NotificationAlarmAlertXCloseDeleteRemove.displayName = 'Bell4NotificationAlarmAlertXCloseDeleteRemove';

module.exports = Bell4NotificationAlarmAlertXCloseDeleteRemove;
module.exports.Bell4NotificationAlarmAlertXCloseDeleteRemove = Bell4NotificationAlarmAlertXCloseDeleteRemove;
module.exports.default = Bell4NotificationAlarmAlertXCloseDeleteRemove;
