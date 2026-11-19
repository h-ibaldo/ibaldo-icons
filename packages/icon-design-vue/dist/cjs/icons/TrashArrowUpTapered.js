'use strict';

const { defineComponent, h } = require('vue');

const TrashArrowUpTapered = defineComponent({
  name: 'TrashArrowUpTapered',
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
          h('rect', {"x":"2.97473145010008","y":"6.000000000459295","width":"18","height":"3","rx":"1","ry":"1"}),
          h('path', {"d":"M18.97473145010008,9.000000000459295l-.857953307529897,11.153392997768606c-.080153410760431,1.041994339988378-.949036354470081,1.846607002231394-1.99410897100006,1.846607002231394H7.826793728620032c-1.045072616529978,0-1.913955560239629-.804612662243017-1.99410897100006-1.846607002231394l-.857953307519892-11.153392997768606"}),
          h('path', {"d":"M14.97473145010008,6.000000000459295v-2.353921007723329c0-.909104324451619-.736974667830509-1.646078992279399-1.646078992280309-1.646078992279399h-2.707842015450296c-.9091043244498,0-1.646078992269395.736974667827781-1.646078992269395,1.646078992279399v2.353921007723329"}),
          h('polyline', {"points":"9.974731450090076 15.000000000459295 11.974731450090076 13.000000000459295 13.974731450090076 15.000000000459295"}),
          h('line', {"x1":"11.974731450090076","y1":"18.000000000459295","x2":"11.974731450090076","y2":"13.000000000459295"})
        ]
      );
  }
});

module.exports = TrashArrowUpTapered;
module.exports.TrashArrowUpTapered = TrashArrowUpTapered;
module.exports.default = TrashArrowUpTapered;
