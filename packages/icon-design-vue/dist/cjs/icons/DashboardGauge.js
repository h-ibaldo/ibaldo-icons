'use strict';

const { defineComponent, h } = require('vue');

const DashboardGauge = defineComponent({
  name: 'DashboardGauge',
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
          h('path', {"d":"M15 7L12 12"}),
          h('path', {"d":"M13 12C13 11.445 12.555 11 12 11C11.445 11 11 11.445 11 12C11 12.555 11.445 13 12 13C12.555 13 13 12.555 13 12Z"}),
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12"}),
          h('path', {"d":"M10.934 6.105C8.129 6.609 6 9.051 6 12"}),
          h('path', {"d":"M18 12C18 11.434 17.914 10.891 17.77 10.367"}),
          h('path', {"d":"M18 17L18 21"}),
          h('path', {"d":"M22 17L22 21"}),
          h('path', {"d":"M10 21L14 21L14 17L10 17Z"}),
          h('path', {"d":"M2 21L6 21L6 17L2 17Z"})
        ]
      );
  }
});

module.exports = DashboardGauge;
module.exports.DashboardGauge = DashboardGauge;
module.exports.default = DashboardGauge;
