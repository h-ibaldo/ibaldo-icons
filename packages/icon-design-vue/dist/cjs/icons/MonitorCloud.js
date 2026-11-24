'use strict';

const { defineComponent, h } = require('vue');

const MonitorCloud = defineComponent({
  name: 'MonitorCloud',
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
          h('path', {"d":"M2 4L22 4L22 18L2 18Z"}),
          h('path', {"d":"M12 21L12 18"}),
          h('path', {"d":"M18 21L6 21"}),
          h('path', {"d":"M15 14C16.105 14 17 13.105 17 12C17 10.895 16.105 10 15 10C14.945 10 14.887 10.004 14.832 10.008C14.422 8.84 13.309 8 12 8C10.691 8 9.578 8.84 9.168 10.008C9.113 10.004 9.055 10 9 10C7.895 10 7 10.895 7 12C7 13.105 7.895 14 9 14Z"})
        ]
      );
  }
});

module.exports = MonitorCloud;
module.exports.MonitorCloud = MonitorCloud;
module.exports.default = MonitorCloud;
