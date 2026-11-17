"use strict";

const { forwardRef } = require('react');

const DownloadDashedArrowAlt = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="16.974731450032778 12.00000000113414 11.974731449356113 17.000000000462023 6.974731450032778 11.999999999786269" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731451105981" y1="10.000000000462023" x2="11.974731449356113" y2="17.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731451105981" y1="6.010000000462242" x2="11.974731451105981" y2="6.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731451105981" y1="2.010000000462242" x2="11.974731451105981" y2="2.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.974731450032778" y1="22.000000000462933" x2="20.974731450032778" y2="22.000000000462933" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DownloadDashedArrowAlt.displayName = 'DownloadDashedArrowAlt';

module.exports = DownloadDashedArrowAlt;
module.exports.DownloadDashedArrowAlt = DownloadDashedArrowAlt;
module.exports.default = DownloadDashedArrowAlt;
