'use strict';

const { defineComponent, h } = require('vue');

const ScissorsClosed = defineComponent({
  name: 'ScissorsClosed',
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
          h('path', {"d":"M7.598 10.5C6.77 11.938 4.934 12.426 3.5 11.598C2.066 10.77 1.574 8.938 2.402 7.5C3.23 6.066 5.066 5.574 6.5 6.402C7.934 7.23 8.426 9.066 7.598 10.5Z"}),
          h('path', {"d":"M3.5 11.598L9 15"}),
          h('path', {"d":"M9 15L19.09 9"}),
          h('path', {"d":"M15 16L15 16"}),
          h('path', {"d":"M12 16L12 16"}),
          h('path', {"d":"M9 16L9 16"}),
          h('path', {"d":"M6 16L6 16"}),
          h('path', {"d":"M3 16L3 16"}),
          h('path', {"d":"M18 16L18 16"}),
          h('path', {"d":"M21 16L21 16"})
        ]
      );
  }
});

module.exports = ScissorsClosed;
module.exports.ScissorsClosed = ScissorsClosed;
module.exports.default = ScissorsClosed;
