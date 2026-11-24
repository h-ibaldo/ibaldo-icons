'use strict';

const { defineComponent, h } = require('vue');

const Spinner = defineComponent({
  name: 'Spinner',
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
          h('path', {"d":"M11.949462885140747,3.000000000480213C6.978900136940865,3.000000000480213,2.949462885140747,7.029437252280331,2.949462885140747,12.000000000480213s4.029437251800118,9,9,9c4.970562748198972,0,9-4.029437251800118,9-9"})
        ]
      );
  }
});

module.exports = Spinner;
module.exports.Spinner = Spinner;
module.exports.default = Spinner;
