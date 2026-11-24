'use strict';

const { defineComponent, h } = require('vue');

const SquareDot = defineComponent({
  name: 'SquareDot',
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
          h('path', {"d":"M20 13L20 19C20 20.656 18.656 22 17 22L5 22C3.344 22 2 20.656 2 19L2 7C2 5.344 3.344 4 5 4L11 4"}),
          h('path', {"d":"M15 5.5C15 7.434 16.566 9 18.5 9C20.434 9 22 7.434 22 5.5C22 3.566 20.434 2 18.5 2C16.566 2 15 3.566 15 5.5Z"})
        ]
      );
  }
});

module.exports = SquareDot;
module.exports.SquareDot = SquareDot;
module.exports.default = SquareDot;
