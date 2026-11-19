'use strict';

const { defineComponent, h } = require('vue');

const ArrowOrbit = defineComponent({
  name: 'ArrowOrbit',
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
          h('path', {"d":"M10 13L13 16L10 19"}),
          h('path', {"d":"M12 16C6.477 16 2 13.762 2 11C2 8.238 6.477 6 12 6C17.523 6 22 8.238 22 11C22 12.859 19.973 14.48 16.961 15.344"})
        ]
      );
  }
});

module.exports = ArrowOrbit;
module.exports.ArrowOrbit = ArrowOrbit;
module.exports.default = ArrowOrbit;
