"use strict";

const { forwardRef } = require('react');

const Cloud2BarSlash = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="3.000000000010914" y1="20.999999946998287" x2="21.000000000014552" y2="5.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.465087890639552,6.779113743028574c-.8192138671875-1.643249511711474-2.5042724609375-2.77911376953125-4.465087890628638-2.77911376953125-2.761413574211474,0-5,2.23858642578125-5,5,0,.137084960941138.029541015628638.265869140621362.040344238288526.40020751953125-1.787048339847388.76239013671875-3.040344238288526,2.5341796875-3.040344238288526,4.59979248046875,0,.94024658203125.275329589851026,1.809814453121362.726684570319776,2.561096191409888" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.64953613283069,18.792053196157212c.432250976558862.121826171871362.87921142578125.207946777340112,1.350463867180224.207946777340112h11c2.209167480472388,0,4.000000000003638-1.790832519538526,4.000000000003638-4,0-1.866821289058862-1.284423828125-3.421691894538526-3.0137939453125-3.862854003898974.001586914058862-.046569824229664.013793945308862-.09014892578125.013793945308862-.137145996101026,0-.97430419921875-.362182617180224-1.855224609378638-.941101074211474-2.549072265628638" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cloud2BarSlash.displayName = 'Cloud2BarSlash';

module.exports = Cloud2BarSlash;
module.exports.Cloud2BarSlash = Cloud2BarSlash;
module.exports.default = Cloud2BarSlash;
