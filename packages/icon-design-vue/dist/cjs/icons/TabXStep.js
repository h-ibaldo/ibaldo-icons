'use strict';

const { defineComponent, h } = require('vue');

const TabXStep = defineComponent({
  name: 'TabXStep',
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
          h('polyline', {"points":"13.149805218629808 21.997565477288845 2.050537104500108 21.997565477288845 2.050537104500108 1.997565477288845 11.050537104500108 1.997565477288845 11.050537104500108 5.997565477288845 22.050537104500108 5.997565477288845 22.050537104500108 12.997565477288845"}),
          h('line', {"x1":"22.050537104500108","y1":"1.997565477288845","x2":"15.050537104500108","y2":"1.997565477288845"}),
          h('line', {"x1":"17.050537104500108","y1":"16.997565477288845","x2":"22.050537104500108","y2":"21.997565477288845"}),
          h('line', {"x1":"22.050537104500108","y1":"16.997565477288845","x2":"17.050537104500108","y2":"21.997565477288845"})
        ]
      );
  }
});

module.exports = TabXStep;
module.exports.TabXStep = TabXStep;
module.exports.default = TabXStep;
