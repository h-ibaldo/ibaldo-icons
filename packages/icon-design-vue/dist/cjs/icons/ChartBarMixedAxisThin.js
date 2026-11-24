'use strict';

const { defineComponent, h } = require('vue');

const ChartBarMixedAxisThin = defineComponent({
  name: 'ChartBarMixedAxisThin',
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
          h('polyline', {"points":"2 2 2 22 22 22"}),
          h('line', {"x1":"7","y1":"22","x2":"7","y2":"16"}),
          h('line', {"x1":"11","y1":"22","x2":"11","y2":"9"}),
          h('line', {"x1":"15","y1":"22","x2":"15","y2":"11"}),
          h('line', {"x1":"19","y1":"22","x2":"19","y2":"6"})
        ]
      );
  }
});

module.exports = ChartBarMixedAxisThin;
module.exports.ChartBarMixedAxisThin = ChartBarMixedAxisThin;
module.exports.default = ChartBarMixedAxisThin;
