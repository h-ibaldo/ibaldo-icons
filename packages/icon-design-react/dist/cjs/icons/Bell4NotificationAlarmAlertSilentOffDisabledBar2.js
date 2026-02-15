"use strict";

const { forwardRef } = require('react');

const Bell4NotificationAlarmAlertSilentOffDisabledBar2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M14.000000004471076,17.000000003885361v2.000002000001587c0,1.1045683950897-.895429604921446,1.999997999998413-1.999998000010237,1.999997999998413h-.000004000001354c-1.10456839509061,0-1.999997999988409-.895429604908713-1.999997999988409-1.999997999998413v-2.000002000001587" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.000000004471076" y1="17.000000003885361" x2="7.000000004471076" y2="17.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000004471076" y1="2.000000003886271" x2="12.000000004471076" y2="4.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.000000004471076" y1="3.000000003886271" x2="4.000000004471076" y2="20.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.887146000559369,4.307373050766728c-.59393310546875-.19677734375-1.227172851569776-.307373046880457-1.887145996088293-.307373046880457-3.313720703130457,0-6,2.686279296881366-6,5.999999999999091v2.6875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.000000004471076,17.000000003885361v-7c0-1.3504638671875-.451538085952052-2.592529296867724-1.204528808590112-3.595214843749091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bell4NotificationAlarmAlertSilentOffDisabledBar2.displayName = 'Bell4NotificationAlarmAlertSilentOffDisabledBar2';

module.exports = Bell4NotificationAlarmAlertSilentOffDisabledBar2;
module.exports.Bell4NotificationAlarmAlertSilentOffDisabledBar2 = Bell4NotificationAlarmAlertSilentOffDisabledBar2;
module.exports.default = Bell4NotificationAlarmAlertSilentOffDisabledBar2;
