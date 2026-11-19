'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownLeftCircleJoined = defineComponent({
  name: 'ArrowDownLeftCircleJoined',
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
          h('path', {"d":"M14 15L9 15L9 10"}),
          h('path', {"d":"M14.438 2.313C12.453 1.812 10.266 1.836 7.918 2.949C4.602 4.52 2.234 7.727 2.02 11.391C1.652 17.582 6.918 22.645 13.172 21.934C17.805 21.406 21.531 17.586 21.957 12.941C22.102 11.367 21.879 9.859 21.367 8.492C20.617 6.492 17.988 6.012 16.477 7.523L9 15"})
        ]
      );
  }
});

module.exports = ArrowDownLeftCircleJoined;
module.exports.ArrowDownLeftCircleJoined = ArrowDownLeftCircleJoined;
module.exports.default = ArrowDownLeftCircleJoined;
