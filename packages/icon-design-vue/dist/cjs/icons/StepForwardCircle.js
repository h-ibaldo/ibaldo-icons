'use strict';

const { defineComponent, h } = require('vue');

const StepForwardCircle = defineComponent({
  name: 'StepForwardCircle',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M12 14.863L12 9.137C12 8.285 12.988 7.824 13.641 8.367L17.078 11.23C17.559 11.633 17.559 12.367 17.078 12.77L13.641 15.633C12.988 16.176 12 15.711 12 14.863Z"}),
          h('path', {"d":"M8 16L8 8"})
        ]
      );
  }
});

module.exports = StepForwardCircle;
module.exports.StepForwardCircle = StepForwardCircle;
module.exports.default = StepForwardCircle;
