'use strict';

const { defineComponent, h } = require('vue');

const DownloadCircle = defineComponent({
  name: 'DownloadCircle',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('polyline', {"points":"14.974731450025502 9.000000001537956 11.974731449353385 12.000000001537956 8.974731450025502 9.000000001537956"}),
          h('line', {"x1":"11.974731451102343","y1":"2.000000001537956","x2":"11.974731449353385","y2":"12.000000001537956"}),
          h('path', {"d":"M4.839050297681752,5.000000001537956c-1.7698974609375,1.80401611328125-2.86431884765625,4.273132324217841-2.86431884765625,7,0,5.522827148436591,4.477172851563409,10,10,10,5.522827148438409,0,10-4.477172851563409,10-10,0-2.726867675782159-1.09442138671875-5.19598388671875-2.86431884765625-7"}),
          h('path', {"d":"M7.995361332838911,15.000000001537956c.911437988280341,1.209655761717841,2.347961425780341,2,3.979370117186591,2s3.06793212890625-.790344238282159,3.979370117188409-2"})
        ]
      );
  }
});

module.exports = DownloadCircle;
module.exports.DownloadCircle = DownloadCircle;
module.exports.default = DownloadCircle;
