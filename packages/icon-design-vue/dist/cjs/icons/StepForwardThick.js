'use strict';

const { defineComponent, h } = require('vue');

const StepForwardThick = defineComponent({
  name: 'StepForwardThick',
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
          h('path', {"d":"M11 4.348L11 19.652C11 20.801 12.359 21.402 13.207 20.633L21.5 13.129C22.168 12.523 22.168 11.477 21.5 10.875L13.207 3.367C12.359 2.598 11 3.199 11 4.348Z"}),
          h('path', {"d":"M3 21L5 21C5.551 21 6 20.551 6 20L6 4C6 3.449 5.551 3 5 3L3 3C2.449 3 2 3.449 2 4L2 20C2 20.551 2.449 21 3 21Z"})
        ]
      );
  }
});

module.exports = StepForwardThick;
module.exports.StepForwardThick = StepForwardThick;
module.exports.default = StepForwardThick;
