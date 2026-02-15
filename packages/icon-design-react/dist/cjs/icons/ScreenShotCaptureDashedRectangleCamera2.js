"use strict";

const { forwardRef } = require('react');

const ScreenShotCaptureDashedRectangleCamera2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M2.016630450970297,4.000000000480213v-1c0-.552284749832324.447715250169495-1,1-1h1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.016630450970297" y1="2.000000000502041" x2="13.016630450970297" y2="2.000000000502041" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.016630450970297" y1="2.000000000502041" x2="8.016630450990306" y2="2.000000000502041" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.016630450970297" y1="20.000000000480213" x2="13.016630450970297" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.016630450970297" y1="20.000000000480213" x2="8.016630450990306" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.016630450970297,20.000000000480213l-1-.000000000047294c-.552284749830505-.000000000025466-.999999999979991-.447715250214969-.999999999949978-1.000000000043656l.000000000040018-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.016630451529636" y1="8.000000000389264" x2="2.016630451489618" y2="9.000000000389264" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.016630451309538" y1="13.000000000389264" x2="2.016630451260426" y2="14.000000000367436" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.016630450970297" y1="8.000000000389264" x2="20.016630450920275" y2="9.000000000389264" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.016630450740195" y1="13.000000000389264" x2="20.016630450700177" y2="14.000000000367436" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.016630451020319,2.000000000476575l1,.000000000047294c.552284749829596.000000000025466.999999999979991.447715250214969.999999999949978,1.000000000043656l-.000000000040018,1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.016630450970297" y1="18.000000000480213" x2="20.016630450970297" y2="22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.016630450970297" y1="20.000000000480213" x2="18.016630450970297" y2="20.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.516630450970297,15.000000000480213h-7c-.828427124750306,0-1.5-.671572875253332-1.5-1.5v-4c0-.828427124746668.671572875249694-1.5,1.5-1.5h.5l2-2h2l2.000001009419975,2h.499998990580025c.828427124749396,0,1.5.671572875253332,1.5,1.5v4c0,.828427124746668-.671572875250604,1.5-1.5,1.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.016630450970297" cy="11.000000000480213" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ScreenShotCaptureDashedRectangleCamera2.displayName = 'ScreenShotCaptureDashedRectangleCamera2';

module.exports = ScreenShotCaptureDashedRectangleCamera2;
module.exports.ScreenShotCaptureDashedRectangleCamera2 = ScreenShotCaptureDashedRectangleCamera2;
module.exports.default = ScreenShotCaptureDashedRectangleCamera2;
