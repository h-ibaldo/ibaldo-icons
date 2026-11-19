'use strict';

const { defineComponent, h } = require('vue');

const WindowListMinusCirclePlain = defineComponent({
  name: 'WindowListMinusCirclePlain',
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
          h('path', {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z"}),
          h('path', {"d":"M19 17L15 17"}),
          h('path', {"d":"M10 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 10"}),
          h('path', {"d":"M2 7L22 7"}),
          h('path', {"d":"M9 12L17 12"}),
          h('path', {"d":"M6 12L6 12"}),
          h('path', {"d":"M9 16L11 16"}),
          h('path', {"d":"M6 16L6 16"})
        ]
      );
  }
});

module.exports = WindowListMinusCirclePlain;
module.exports.WindowListMinusCirclePlain = WindowListMinusCirclePlain;
module.exports.default = WindowListMinusCirclePlain;
