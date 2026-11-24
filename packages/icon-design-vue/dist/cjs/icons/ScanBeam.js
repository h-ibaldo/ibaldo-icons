'use strict';

const { defineComponent, h } = require('vue');

const ScanBeam = defineComponent({
  name: 'ScanBeam',
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
          h('path', {"d":"M2 7L2 3C2 2.449 2.445 2 3 2L7 2"}),
          h('path', {"d":"M22 7L22 3C22 2.449 21.555 2 21 2L17 2"}),
          h('path', {"d":"M2 17L2 21C2 21.551 2.445 22 3 22L7 22"}),
          h('path', {"d":"M22 17L22 21C22 21.551 21.555 22 21 22L17 22"}),
          h('path', {"d":"M2 12L22 12"})
        ]
      );
  }
});

module.exports = ScanBeam;
module.exports.ScanBeam = ScanBeam;
module.exports.default = ScanBeam;
