'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownFromDot = defineComponent({
  name: 'ArrowDownFromDot',
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
          h('path', {"d":"M15 19L12 22L9 19"}),
          h('path', {"d":"M12 12L12 22"}),
          h('path', {"d":"M9 5C9 6.656 10.344 8 12 8C13.656 8 15 6.656 15 5C15 3.344 13.656 2 12 2C10.344 2 9 3.344 9 5Z"})
        ]
      );
  }
});

module.exports = ArrowDownFromDot;
module.exports.ArrowDownFromDot = ArrowDownFromDot;
module.exports.default = ArrowDownFromDot;
