'use strict';

const { defineComponent, h } = require('vue');

const Scissors = defineComponent({
  name: 'Scissors',
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
          h('path', {"d":"M9.598 7.5C8.77 8.938 6.934 9.426 5.5 8.598C4.066 7.77 3.574 5.938 4.402 4.5C5.23 3.066 7.066 2.574 8.5 3.402C9.934 4.23 10.426 6.066 9.598 7.5Z"}),
          h('path', {"d":"M9.598 16.098C8.77 14.664 6.934 14.172 5.5 15C4.066 15.828 3.574 17.664 4.402 19.098C5.23 20.535 7.066 21.023 8.5 20.195C9.934 19.367 10.426 17.535 9.598 16.098Z"}),
          h('path', {"d":"M5.5 15L21.09 6"}),
          h('path', {"d":"M21.09 17.598L14.027 13.52"}),
          h('path', {"d":"M11.043 11.801L5.5 8.598"})
        ]
      );
  }
});

module.exports = Scissors;
module.exports.Scissors = Scissors;
module.exports.default = Scissors;
