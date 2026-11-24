'use strict';

const { defineComponent, h } = require('vue');

const DatabaseClock = defineComponent({
  name: 'DatabaseClock',
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
          h('path', {"d":"M21 17C21 19.762 18.762 22 16 22C13.238 22 11 19.762 11 17C11 14.238 13.238 12 16 12C18.762 12 21 14.238 21 17Z"}),
          h('path', {"d":"M16 15L16 17L18 17"}),
          h('path', {"d":"M3 8L18 8"}),
          h('path', {"d":"M3 14L12 14"}),
          h('path', {"d":"M18 12.422L18 5C18 3.344 16.656 2 15 2L6 2C4.344 2 3 3.344 3 5L3 17C3 18.656 4.344 20 6 20L12.023 20"})
        ]
      );
  }
});

module.exports = DatabaseClock;
module.exports.DatabaseClock = DatabaseClock;
module.exports.default = DatabaseClock;
