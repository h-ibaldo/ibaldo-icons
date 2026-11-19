'use strict';

const { defineComponent, h } = require('vue');

const StopwatchPieDetached = defineComponent({
  name: 'StopwatchPieDetached',
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
          h('path', {"d":"M19.5 13.5C19.5 17.918 15.918 21.5 11.5 21.5C7.082 21.5 3.5 17.918 3.5 13.5C3.5 9.082 7.082 5.5 11.5 5.5C15.918 5.5 19.5 9.082 19.5 13.5Z"}),
          h('path', {"d":"M11.5 8.5C14.262 8.5 16.5 10.738 16.5 13.5"}),
          h('path', {"d":"M9.5 2.5L13.5 2.5"}),
          h('path', {"d":"M11.5 8.5L11.5 13.5L16.5 13.5"}),
          h('path', {"d":"M18.5 5.5L20.5 7.5"})
        ]
      );
  }
});

module.exports = StopwatchPieDetached;
module.exports.StopwatchPieDetached = StopwatchPieDetached;
module.exports.default = StopwatchPieDetached;
