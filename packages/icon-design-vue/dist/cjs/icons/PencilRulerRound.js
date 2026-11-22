'use strict';

const { defineComponent, h } = require('vue');

const PencilRulerRound = defineComponent({
  name: 'PencilRulerRound',
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
          h('path', {"d":"M21.172 2.828C20.066 1.723 18.277 1.723 17.172 2.828L3 17L2 22L7 21L21.172 6.828C22.277 5.723 22.277 3.934 21.172 2.828Z"}),
          h('path', {"d":"M15 5L19 9"}),
          h('path', {"d":"M8 7L10.324 4.676"}),
          h('path', {"d":"M17 16L19.328 13.672"}),
          h('path', {"d":"M7.168 12.824L2.809 8.465C2.418 8.074 2.418 7.441 2.809 7.051L7.051 2.809C7.441 2.418 8.074 2.418 8.465 2.809L12.824 7.168"}),
          h('path', {"d":"M16.828 11.172L21.191 15.535C21.582 15.926 21.582 16.559 21.191 16.949L16.949 21.191C16.559 21.582 15.926 21.582 15.535 21.191L11.172 16.828"})
        ]
      );
  }
});

module.exports = PencilRulerRound;
module.exports.PencilRulerRound = PencilRulerRound;
module.exports.default = PencilRulerRound;
