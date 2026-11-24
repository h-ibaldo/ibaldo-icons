'use strict';

const { defineComponent, h } = require('vue');

const FontPlus = defineComponent({
  name: 'FontPlus',
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
          h('circle', {"cx":"16.999999980991561","cy":"16.997562035418014","r":"5"}),
          h('line', {"x1":"14.999999980991561","y1":"16.997562035418014","x2":"18.999999980991561","y2":"16.997562035418014"}),
          h('line', {"x1":"16.999999980991561","y1":"14.997562035418014","x2":"16.999999980991561","y2":"18.997562035418014"}),
          h('line', {"x1":"3.999999980991561","y1":"16.997562035418014","x2":"8.999999980991561","y2":"16.997562035418014"}),
          h('polyline', {"points":"13.368408184122018 9.997562035418014 9.999999980991561 1.997562035418014 1.999999980991561 20.997562035418014"})
        ]
      );
  }
});

module.exports = FontPlus;
module.exports.FontPlus = FontPlus;
module.exports.default = FontPlus;
