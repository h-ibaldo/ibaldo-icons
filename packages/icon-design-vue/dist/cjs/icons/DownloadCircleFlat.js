'use strict';

const { defineComponent, h } = require('vue');

const DownloadCircleFlat = defineComponent({
  name: 'DownloadCircleFlat',
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
          h('polyline', {"points":"14.97473145002914 8.000000000462023 11.974731449356113 11.000000000462023 8.97473145002914 8.000000000462023"}),
          h('line', {"x1":"11.974731451105981","y1":"2.000000000462023","x2":"11.974731449356113","y2":"11.000000000462023"}),
          h('line', {"x1":"7.97473145002914","y1":"15.000000000462023","x2":"15.97473145002914","y2":"15.000000000462023"}),
          h('path', {"d":"M4.83905029768539,5.000000000462023c-1.7698974609375,1.804016113280341-2.86431884765625,4.273132324217841-2.86431884765625,7,0,5.522827148436591,4.4771728515625,10.000000000000909,10,10.000000000000909s10-4.477172851564319,10-10.000000000000909c0-2.726867675782159-1.09442138671875-5.195983886719659-2.86431884765625-7"})
        ]
      );
  }
});

module.exports = DownloadCircleFlat;
module.exports.DownloadCircleFlat = DownloadCircleFlat;
module.exports.default = DownloadCircleFlat;
