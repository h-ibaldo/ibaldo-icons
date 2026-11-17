"use strict";

const { forwardRef } = require('react');

const DownloadBox1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.974731476735542" y="7.000000026766429" width="20" height="15" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.974731476735542,9.000000026766429v-.338096210310141c0-1.087463676366497.295547000037914-2.154482123111848.855042445720755-3.086974532565364l1.562352460779948-2.603920767980526c.36144649293783-.602410821546073,1.012460147168895-.971008489143969,1.714985851427627-.971008489143969h11.735238484132424c.702525704269647,0,1.353539358489797.368597667599715,1.714985851416714.971008489143969l1.562352460790862,2.603920767982345c.559495445679204.932492409452607.855042445731669,1.999510856200686.855042445731669,3.086974532566273v.338096210307413" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.974731450032778 15.000000000462023 11.974731476735542 18.000000026766429 14.974731450032778 15.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731476735542" y1="11.000000026766429" x2="11.974731476735542" y2="18.000000026766429" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DownloadBox1.displayName = 'DownloadBox1';

module.exports = DownloadBox1;
module.exports.DownloadBox1 = DownloadBox1;
module.exports.default = DownloadBox1;
