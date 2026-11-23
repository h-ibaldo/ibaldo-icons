'use strict';

const { defineComponent, h } = require('vue');

const SprayCanLines = defineComponent({
  name: 'SprayCanLines',
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
          h('path', {"d":"M2 22L2 12C2 10.344 3.344 9 5 9L8 9C9.656 9 11 10.344 11 12L11 22"}),
          h('path', {"d":"M5 9L5 6L8 6L8 9"}),
          h('path', {"d":"M2 13L11 13"}),
          h('path', {"d":"M13 7L22 7"}),
          h('path', {"d":"M15 10L22 12"}),
          h('path', {"d":"M15 4L22 2"})
        ]
      );
  }
});

module.exports = SprayCanLines;
module.exports.SprayCanLines = SprayCanLines;
module.exports.default = SprayCanLines;
