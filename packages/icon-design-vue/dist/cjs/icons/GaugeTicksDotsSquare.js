'use strict';

const { defineComponent, h } = require('vue');

const GaugeTicksDotsSquare = defineComponent({
  name: 'GaugeTicksDotsSquare',
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
          h('path', {"d":"M10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12Z"}),
          h('path', {"d":"M18 6L13.414 10.586"}),
          h('path', {"d":"M10.586 13.414L9.5 14.5"}),
          h('path', {"d":"M18 22L6 22C3.789 22 2 20.211 2 18L2 6C2 3.789 3.789 2 6 2L18 2C20.211 2 22 3.789 22 6L22 18C22 20.211 20.211 22 18 22Z"}),
          h('path', {"d":"M12 6L12 5"}),
          h('path', {"d":"M18 12L19 12"}),
          h('path', {"d":"M6 12L5 12"}),
          h('path', {"d":"M16.949 16.949L16.949 16.949"}),
          h('path', {"d":"M7.051 7.051L7.051 7.051"}),
          h('path', {"d":"M7.051 16.949L7.051 16.949"})
        ]
      );
  }
});

module.exports = GaugeTicksDotsSquare;
module.exports.GaugeTicksDotsSquare = GaugeTicksDotsSquare;
module.exports.default = GaugeTicksDotsSquare;
