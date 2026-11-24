'use strict';

const { defineComponent, h } = require('vue');

const GaugeDropArrowRight = defineComponent({
  name: 'GaugeDropArrowRight',
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
          h('path', {"d":"M12.02 5.992L9.613 11.602C9.246 12.465 9.363 13.453 9.926 14.203C10.973 15.598 13.066 15.598 14.109 14.203C14.672 13.453 14.789 12.465 14.422 11.602Z"}),
          h('path', {"d":"M6 18L8 20L6 22"}),
          h('path', {"d":"M2 20L8 20"}),
          h('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.047 2.16 14.055 2.461 15"})
        ]
      );
  }
});

module.exports = GaugeDropArrowRight;
module.exports.GaugeDropArrowRight = GaugeDropArrowRight;
module.exports.default = GaugeDropArrowRight;
