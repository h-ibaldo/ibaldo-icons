'use strict';

const { defineComponent, h } = require('vue');

const StopwatchDots = defineComponent({
  name: 'StopwatchDots',
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
          h('path', {"d":"M20.5 13.5C20.5 8.805 16.695 5 12 5C7.305 5 3.5 8.805 3.5 13.5C3.5 18.195 7.305 22 12 22C16.695 22 20.5 18.195 20.5 13.5Z"}),
          h('path', {"d":"M9 2L15 2"}),
          h('path', {"d":"M12 9L12 9"}),
          h('path', {"d":"M12 18L12 18"}),
          h('path', {"d":"M16.5 13.5L16.5 13.5"}),
          h('path', {"d":"M7.5 13.5L7.5 13.5"}),
          h('path', {"d":"M15.184 10.32L15.184 10.32"}),
          h('path', {"d":"M8.816 16.68L8.816 16.68"}),
          h('path', {"d":"M15.184 16.68L15.184 16.68"}),
          h('path', {"d":"M8.816 10.32L8.816 10.32"})
        ]
      );
  }
});

module.exports = StopwatchDots;
module.exports.StopwatchDots = StopwatchDots;
module.exports.default = StopwatchDots;
