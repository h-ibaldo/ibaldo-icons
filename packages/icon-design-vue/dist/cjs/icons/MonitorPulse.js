'use strict';

const { defineComponent, h } = require('vue');

const MonitorPulse = defineComponent({
  name: 'MonitorPulse',
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
          h('path', {"d":"M20 18L4 18C2.895 18 2 17.105 2 16L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 16C22 17.105 21.105 18 20 18Z"}),
          h('path', {"d":"M6 10L8 10L10 6L14 14L16 10L18 10"}),
          h('path', {"d":"M2 22L10 22"}),
          h('path', {"d":"M14 22L14 22"}),
          h('path', {"d":"M18 22L18 22"}),
          h('path', {"d":"M22 22L22 22"})
        ]
      );
  }
});

module.exports = MonitorPulse;
module.exports.MonitorPulse = MonitorPulse;
module.exports.default = MonitorPulse;
