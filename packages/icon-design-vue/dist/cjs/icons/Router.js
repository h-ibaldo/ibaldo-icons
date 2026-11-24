'use strict';

const { defineComponent, h } = require('vue');

const Router = defineComponent({
  name: 'Router',
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
          h('path', {"d":"M2 15L22 15L22 21L2 21Z"}),
          h('path', {"d":"M19 18L18 18"}),
          h('path', {"d":"M15 18L14 18"}),
          h('path', {"d":"M11 18L10 18"}),
          h('path', {"d":"M3 5L12 15L21 5"}),
          h('path', {"d":"M10.691 9.113C11.469 8.332 12.738 8.332 13.52 9.113"}),
          h('path', {"d":"M8.898 7.113C10.668 5.344 13.539 5.344 15.309 7.113"}),
          h('path', {"d":"M7 5.113C9.82 2.297 14.387 2.297 17.207 5.113"})
        ]
      );
  }
});

module.exports = Router;
module.exports.Router = Router;
module.exports.default = Router;
