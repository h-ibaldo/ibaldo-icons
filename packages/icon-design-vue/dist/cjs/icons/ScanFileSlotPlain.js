'use strict';

const { defineComponent, h } = require('vue');

const ScanFileSlotPlain = defineComponent({
  name: 'ScanFileSlotPlain',
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
          h('path', {"d":"M8 11L16 11"}),
          h('path', {"d":"M8 7L10 7"}),
          h('path', {"d":"M2 16L22 16"}),
          h('path', {"d":"M4 16L4 3C4 2.448 4.448 2 5 2L19 2C19.552 2 20 2.448 20 3L20 16"}),
          h('path', {"d":"M20 20L20 21C20 21.552 19.552 22 19 22L5 22C4.448 22 4 21.552 4 21L4 20"})
        ]
      );
  }
});

module.exports = ScanFileSlotPlain;
module.exports.ScanFileSlotPlain = ScanFileSlotPlain;
module.exports.default = ScanFileSlotPlain;
