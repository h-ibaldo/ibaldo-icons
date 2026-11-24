'use strict';

const { defineComponent, h } = require('vue');

const MonitorCode = defineComponent({
  name: 'MonitorCode',
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
          h('path', {"d":"M13 7L11 13"}),
          h('path', {"d":"M16 8L18 10L16 12"}),
          h('path', {"d":"M8 8L6 10L8 12"}),
          h('path', {"d":"M20 17L4 17C2.895 17 2 16.105 2 15L2 5C2 3.895 2.895 3 4 3L20 3C21.105 3 22 3.895 22 5L22 15C22 16.105 21.105 17 20 17Z"}),
          h('path', {"d":"M5 21L19 21"}),
          h('path', {"d":"M12 17L12 21"})
        ]
      );
  }
});

module.exports = MonitorCode;
module.exports.MonitorCode = MonitorCode;
module.exports.default = MonitorCode;
