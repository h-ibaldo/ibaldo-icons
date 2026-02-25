"use strict";

const { forwardRef } = require('react');

const Cloud2ArrowTransfer2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="15.999999987569026 19.999999973319063 13.999999987659976 21.999999973408194 11.999999987569026 19.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999987390765" y1="15.999999973408194" x2="13.999999987659976" y2="21.999999973408194" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7.999999987259798 11.999999973768354 9.999999986990588 9.999999973497324 11.999999987259798 11.999999973228114" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999987801857" y1="15.999999973497324" x2="9.999999986990588" y2="9.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.000000000010914,16.858581516458798c1.722229003909888-.446044921860448,3-1.996826171860448,3-3.858581542961474,0-1.866821289058862-1.284423828121362-3.421691894538526-3.013793945308862-3.862854003898974.001586914058862-.046569824229664.013793945308862-.09014892578125.013793945308862-.137145996101026,0-2.20916748046875-1.79083251953125-4-4-4-.137084960930224,0-.266723632808862.02685546875-.400268554680224.04034423828125-.76239013671875-1.787048339840112-2.534118652351026-3.04034423828125-4.599731445319776-3.04034423828125-2.761413574211474,0-5,2.23858642578125-5,5,0,.137084960941138.029541015628638.265869140621362.040344238288526.40020751953125-1.787048339847388.76239013671875-3.040344238288526,2.5341796875-3.040344238288526,4.59979248046875,0,2.047790527351026,1.237548828128638,3.796447753909888,3,4.5693359375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cloud2ArrowTransfer2.displayName = 'Cloud2ArrowTransfer2';

module.exports = Cloud2ArrowTransfer2;
module.exports.Cloud2ArrowTransfer2 = Cloud2ArrowTransfer2;
module.exports.default = Cloud2ArrowTransfer2;
