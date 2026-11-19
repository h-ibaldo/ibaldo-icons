'use strict';

const { defineComponent, h } = require('vue');

const StopwatchQuestionTick = defineComponent({
  name: 'StopwatchQuestionTick',
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
          h('path', {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z"}),
          h('path', {"d":"M12 2L12 5"}),
          h('path', {"d":"M10 2L14 2"}),
          h('path', {"d":"M20 6L19 7"}),
          h('path', {"d":"M10 11C10 9.895 10.895 9 12 9C13.105 9 14 9.895 14 11C14 11.641 13.746 12.254 13.293 12.707L12 14"}),
          h('path', {"d":"M12 17L12 17"})
        ]
      );
  }
});

module.exports = StopwatchQuestionTick;
module.exports.StopwatchQuestionTick = StopwatchQuestionTick;
module.exports.default = StopwatchQuestionTick;
