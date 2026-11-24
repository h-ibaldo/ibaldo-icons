'use strict';

const { defineComponent, h } = require('vue');

const StopwatchFastTick = defineComponent({
  name: 'StopwatchFastTick',
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
          h('path', {"d":"M14 2L14 5"}),
          h('path', {"d":"M12 2L16 2"}),
          h('path', {"d":"M16 10L14 13"}),
          h('path', {"d":"M22 6L21 7"}),
          h('path', {"d":"M2 13L8 13"}),
          h('path', {"d":"M6 21L8 21"}),
          h('path', {"d":"M4 17L8 17"}),
          h('path', {"d":"M12 20.738C12.641 20.902 13.309 21 14 21C18.418 21 22 17.418 22 13C22 8.582 18.418 5 14 5C11.039 5 8.465 6.609 7.078 9"})
        ]
      );
  }
});

module.exports = StopwatchFastTick;
module.exports.StopwatchFastTick = StopwatchFastTick;
module.exports.default = StopwatchFastTick;
