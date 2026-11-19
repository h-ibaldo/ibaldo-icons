'use strict';

const { defineComponent, h } = require('vue');

const Bolt = defineComponent({
  name: 'Bolt',
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
          h('polygon', {"points":"18.999999976489562 9.998779299956368 12.999999976489562 9.998779299956368 12.999999976489562 1.998779299956368 4.999999976489562 13.998779299956368 10.999999976489562 13.998779299956368 10.999999976489562 21.998840335112618 18.999999976489562 9.998779299956368"})
        ]
      );
  }
});

module.exports = Bolt;
module.exports.Bolt = Bolt;
module.exports.default = Bolt;
