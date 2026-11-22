'use strict';

const { defineComponent, h } = require('vue');

const ChartDotsAxis = defineComponent({
  name: 'ChartDotsAxis',
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
          h('path', {"d":"M2 2L2 22L22.023 22"}),
          h('path', {"d":"M20 3L13 6"}),
          h('path', {"d":"M16 11L12 8"}),
          h('path', {"d":"M15 13L10 15"}),
          h('path', {"d":"M9 6C9 4.895 9.895 4 11 4C12.105 4 13 4.895 13 6C13 7.105 12.105 8 11 8C9.895 8 9 7.105 9 6Z"}),
          h('path', {"d":"M15 13C15 11.895 15.895 11 17 11C18.105 11 19 11.895 19 13C19 14.105 18.105 15 17 15C15.895 15 15 14.105 15 13Z"}),
          h('path', {"d":"M6 16C6 14.895 6.895 14 8 14C9.105 14 10 14.895 10 16C10 17.105 9.105 18 8 18C6.895 18 6 17.105 6 16Z"})
        ]
      );
  }
});

module.exports = ChartDotsAxis;
module.exports.ChartDotsAxis = ChartDotsAxis;
module.exports.default = ChartDotsAxis;
