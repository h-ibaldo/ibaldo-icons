'use strict';

const { defineComponent, h } = require('vue');

const StopwatchClockwiseDetached = defineComponent({
  name: 'StopwatchClockwiseDetached',
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
          h('path', {"d":"M10 2L14 2"}),
          h('path', {"d":"M19 5L21 7"}),
          h('path', {"d":"M4 20L4 16L8 16"}),
          h('path', {"d":"M5.07 17C6.453 19.391 9.039 21 12 21C16.418 21 20 17.418 20 13C20 8.582 16.418 5 12 5C7.922 5 4.563 8.055 4.07 12"}),
          h('path', {"d":"M12 9L12 13"})
        ]
      );
  }
});

module.exports = StopwatchClockwiseDetached;
module.exports.StopwatchClockwiseDetached = StopwatchClockwiseDetached;
module.exports.default = StopwatchClockwiseDetached;
