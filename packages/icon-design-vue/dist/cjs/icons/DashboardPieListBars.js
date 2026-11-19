'use strict';

const { defineComponent, h } = require('vue');

const DashboardPieListBars = defineComponent({
  name: 'DashboardPieListBars',
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
          h('path', {"d":"M12 7C12 4.238 9.762 2 7 2C4.238 2 2 4.238 2 7C2 9.762 4.238 12 7 12C9.762 12 12 9.762 12 7Z"}),
          h('path', {"d":"M7 2L7 7L12 7"}),
          h('path', {"d":"M7 18L2 18L2 22L7 22Z"}),
          h('path', {"d":"M12 15L7 15L7 22L12 22Z"}),
          h('path', {"d":"M17 17L12 17L12 22L17 22Z"}),
          h('path', {"d":"M22 11L17 11L17 22L22 22Z"}),
          h('path', {"d":"M17 2L22 2"}),
          h('path', {"d":"M17 6L22 6"})
        ]
      );
  }
});

module.exports = DashboardPieListBars;
module.exports.DashboardPieListBars = DashboardPieListBars;
module.exports.default = DashboardPieListBars;
