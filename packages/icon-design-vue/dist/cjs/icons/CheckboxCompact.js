'use strict';

const { defineComponent, h } = require('vue');

const CheckboxCompact = defineComponent({
  name: 'CheckboxCompact',
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
          h('rect', {"x":"3.949462885140747","y":"4.000000000480213","width":"16","height":"16","rx":"3","ry":"3"})
        ]
      );
  }
});

module.exports = CheckboxCompact;
module.exports.CheckboxCompact = CheckboxCompact;
module.exports.default = CheckboxCompact;
