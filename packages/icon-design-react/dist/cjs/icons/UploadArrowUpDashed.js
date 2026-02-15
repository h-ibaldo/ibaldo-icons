"use strict";

const { forwardRef } = require('react');

const UploadArrowUpDashed = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M19.974731449123283,22.000000001895387h.000002000000677c1.104568388793268.000000000100044,1.999998000079358-.895429611025065,1.999998000181222-1.999997999820152v-.000001999998858" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.974731449661704" y1="16.000000002076376" x2="21.974731449843603" y2="14.000000002076376" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.974731450200125" y1="10.000000002076376" x2="21.974731450382023" y2="8.000000002076376" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.974731450742183,4.000000002076376v-.000002000000677c.000000000098225-1.104568388794178-.895429611027794-1.999998000080268-1.999997999821062-1.999998000182131h-.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.974731450920444,2.000000000459295h-.000002000000677c-1.104568388793268-.000000000100044-1.999998000079358.895429611025975-1.999998000177584,1.999997999820152v.000001999999768" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731450382023" y1="8.000000000279215" x2="1.974731450200125" y2="10.000000000279215" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731449843603" y1="14.000000000279215" x2="1.974731449661704" y2="16.000000000279215" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.974731449123283" y1="22.000000000817636" x2="9.974731449123283" y2="22.000000001088665" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.974731449123283" y1="22.000000001625267" x2="15.974731449123283" y2="22.000000001896296" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.974731450920444" y1="2.000000000817636" x2="9.974731450920444" y2="2.000000001088665" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.974731450920444" y1="2.000000001625267" x2="15.974731450920444" y2="2.000000001896296" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.974731449305182,20.000000000279215v.000002000001587c-.000000000101863,1.104568388792359.895429611024156,1.999998000078449,1.999997999817424,1.999998000178493h.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.974731450472973 11.000000000639375 11.97473145168442 8.000000001179615 14.974731450472973 11.000000001716217" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731448410239" y1="16.000000001179615" x2="11.97473145168442" y2="8.000000001179615" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

UploadArrowUpDashed.displayName = 'UploadArrowUpDashed';

module.exports = UploadArrowUpDashed;
module.exports.UploadArrowUpDashed = UploadArrowUpDashed;
module.exports.default = UploadArrowUpDashed;
