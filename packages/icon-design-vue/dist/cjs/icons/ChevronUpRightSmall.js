'use strict';

const { defineComponent, h } = require('vue');

const ChevronUpRightSmall = defineComponent({
  name: 'ChevronUpRightSmall',
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
          h('path', {"d":"M14 15L14 10L9 10"})
        ]
      );
  }
});

module.exports = ChevronUpRightSmall;
module.exports.ChevronUpRightSmall = ChevronUpRightSmall;
module.exports.default = ChevronUpRightSmall;
