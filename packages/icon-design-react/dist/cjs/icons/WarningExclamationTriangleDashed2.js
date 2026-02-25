"use strict";

const { forwardRef } = require('react');

const WarningExclamationTriangleDashed2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="11.974731450040053" y1="17.010000000480431" x2="11.974731450040053" y2="17.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731450040053" y1="10.000000000479304" x2="11.974731450040053" y2="13.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.366699223479372" y1="6.314025879386463" x2="7.395751957859829" y2="8.013183594229304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.553710942229372" y1="8.013183594229304" x2="15.582763676609829" y2="6.314025879386463" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.402771000819484" y1="11.500976562979304" x2="4.418090825040053" y2="13.224182129386463" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.531372075040053" y1="13.224182129386463" x2="18.546691899269717" y2="11.500976562979304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.781005864109829,18.284118652823963c.050231933590112-.517272949219659-.026184082040345-1.056396484375-.273864746090112-1.572204589844659" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.171813969569484,21.000000000479304h1.633361816409888c.087097167970569,0,.163940429700233-.025512695310681.248474121090112-.032470703125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.168457036099426,18.284118652383768c-.050231933570103-.517272949221478.026184082080363-1.056396484374091.273864746161053-1.572204589831927" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.777648930519717,21.000000000247383l-1.633361816409888-.000000000073669c-.087097167979664-.000000000002728-.163940429680224-.025512695319776-.248474121090112-.032470703134095" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="10.816589360199941 21.000000000428372 11.974731450040053 21.000000000479304 13.132873539880165 21.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.964172368019717,3.234802246573963c-.642517089840112-.222961425780341-1.336364746090112-.222961425780341-1.978881835950233,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WarningExclamationTriangleDashed2.displayName = 'WarningExclamationTriangleDashed2';

module.exports = WarningExclamationTriangleDashed2;
module.exports.WarningExclamationTriangleDashed2 = WarningExclamationTriangleDashed2;
module.exports.default = WarningExclamationTriangleDashed2;
