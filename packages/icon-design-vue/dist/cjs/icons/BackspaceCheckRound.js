'use strict';

const { defineComponent, h } = require('vue');

const BackspaceCheckRound = defineComponent({
  name: 'BackspaceCheckRound',
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
          h('path', {"d":"M22 17L22 7C22 5.344 20.656 4 19 4L9 4C8.086 4 7.223 4.418 6.652 5.133L2.676 10.133C1.805 11.227 1.805 12.773 2.676 13.867L6.652 18.867C7.223 19.582 8.086 20 9 20L19 20C20.656 20 22 18.656 22 17Z"}),
          h('path', {"d":"M10 12L12 14L16 10"})
        ]
      );
  }
});

module.exports = BackspaceCheckRound;
module.exports.BackspaceCheckRound = BackspaceCheckRound;
module.exports.default = BackspaceCheckRound;
