'use strict';

const { defineComponent, h } = require('vue');

const PlusSmall = defineComponent({
  name: 'PlusSmall',
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
          h('line', {"x1":"11.97","y1":"7","x2":"11.97","y2":"17"}),
          h('line', {"x1":"16.97","y1":"12","x2":"6.97","y2":"12"})
        ]
      );
  }
});

module.exports = PlusSmall;
module.exports.PlusSmall = PlusSmall;
module.exports.default = PlusSmall;
