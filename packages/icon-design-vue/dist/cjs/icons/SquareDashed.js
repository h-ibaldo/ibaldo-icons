'use strict';

const { defineComponent, h } = require('vue');

const SquareDashed = defineComponent({
  name: 'SquareDashed',
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
          h('path', {"d":"M4 22C2.895 22 2 21.105 2 20"}),
          h('path', {"d":"M2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4"}),
          h('path', {"d":"M22 20C22 21.105 21.105 22 20 22"}),
          h('path', {"d":"M16 22L14 22"}),
          h('path', {"d":"M10 22L8 22"}),
          h('path', {"d":"M2 16L2 14"}),
          h('path', {"d":"M2 10L2 8"}),
          h('path', {"d":"M22 16L22 14"}),
          h('path', {"d":"M22 10L22 8"})
        ]
      );
  }
});

module.exports = SquareDashed;
module.exports.SquareDashed = SquareDashed;
module.exports.default = SquareDashed;
