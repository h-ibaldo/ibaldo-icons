"use strict";

const { forwardRef } = require('react');

const TrashUndelete1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="11.00000000018008 13.000000000709406 11.00000000018008 16.000000000706677 14.00000000018008 16.000000000706677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.100769043150649,16.000000000709406c.46337890625-2.282165527344659,2.480346679689319-4,4.899230957029431-4,2.761413574220569,0,5,2.238586425780341,5,5,0,2.761413574217841-2.238586425779431,5-5,5-1.630493164060681,0-3.064636230470569-.792236328125-3.977355957029431-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.00000000018008,22.000000000709406h-5c-1.104569499659192,0-2-.89543050033808-2-2V6.000000000710315" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.00000000018008" y1="6.000000000710315" x2="16.00000000018008" y2="9.000000000709406" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.00000000018008" y1="6.000000000710315" x2="18.00000000018008" y2="6.000000000710315" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.00000000018008,6.000000000710315v-2.35392100772151c0-.909104324453438-.736974667830509-1.646078992279399-1.646078992280309-1.646078992279399h-2.707842015430288c-.909104324458895,0-1.646078992289404.736974667825962-1.646078992289404,1.646078992279399v2.35392100772151" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TrashUndelete1.displayName = 'TrashUndelete1';

module.exports = TrashUndelete1;
module.exports.TrashUndelete1 = TrashUndelete1;
module.exports.default = TrashUndelete1;
