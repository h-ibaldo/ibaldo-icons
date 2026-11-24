'use strict';

const { defineComponent, h } = require('vue');

const TrayStackMinusFlat = defineComponent({
  name: 'TrayStackMinusFlat',
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
          h('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 10C2 8.895 2.895 8 4 8L20 8C21.105 8 22 8.895 22 10L22 20C22 21.105 21.105 22 20 22Z"}),
          h('path', {"d":"M15 15L9 15"}),
          h('path', {"d":"M4 5L20 5"}),
          h('path', {"d":"M6 2L18 2"})
        ]
      );
  }
});

module.exports = TrayStackMinusFlat;
module.exports.TrayStackMinusFlat = TrayStackMinusFlat;
module.exports.default = TrayStackMinusFlat;
