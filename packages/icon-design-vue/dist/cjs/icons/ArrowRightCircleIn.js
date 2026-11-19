'use strict';

const { defineComponent, h } = require('vue');

const ArrowRightCircleIn = defineComponent({
  name: 'ArrowRightCircleIn',
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
          h('path', {"d":"M12 9L15 12L12 15"}),
          h('path', {"d":"M2 12L15 12"}),
          h('path', {"d":"M3.352 17C5.082 19.984 8.301 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C8.301 2 5.082 4.016 3.352 7"})
        ]
      );
  }
});

module.exports = ArrowRightCircleIn;
module.exports.ArrowRightCircleIn = ArrowRightCircleIn;
module.exports.default = ArrowRightCircleIn;
