'use strict';

const { defineComponent, h } = require('vue');

const MobileCartCenter = defineComponent({
  name: 'MobileCartCenter',
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
          h('rect', {"x":"5.050537117662316","y":"1.998782732995096","width":"14","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"5.050537117662316","y1":"4.998782732995096","x2":"19.050537117662316","y2":"4.998782732995096"}),
          h('line', {"x1":"5.050537117662316","y1":"18.998782732995096","x2":"19.050537117662316","y2":"18.998782732995096"}),
          h('polyline', {"points":"8.050537117662316 8.998782732995096 10.050537117662316 8.998782732995096 11.050537117662316 12.998782732995096 14.050537117662316 12.998782732995096 15.050537117662316 9.998782732995096 10.550537117662316 9.998782732995096"}),
          h('line', {"x1":"11.050537117662316","y1":"14.998782732995096","x2":"11.050537117662316","y2":"14.998782732995096"}),
          h('line', {"x1":"14.050537117662316","y1":"14.998782732995096","x2":"14.050537117662316","y2":"14.998782732995096"})
        ]
      );
  }
});

module.exports = MobileCartCenter;
module.exports.MobileCartCenter = MobileCartCenter;
module.exports.default = MobileCartCenter;
