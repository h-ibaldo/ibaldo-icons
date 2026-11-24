'use strict';

const { defineComponent, h } = require('vue');

const X = defineComponent({
  name: 'X',
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
          h('line', {"x1":"3.999999991150617","y1":"20.000000000538421","x2":"19.999999990430297","y2":"4.000000001257831"}),
          h('line', {"x1":"19.999999990070137","y1":"20.000000000894943","x2":"3.999999991510776","y2":"4.000000000897671"})
        ]
      );
  }
});

module.exports = X;
module.exports.X = X;
module.exports.default = X;
