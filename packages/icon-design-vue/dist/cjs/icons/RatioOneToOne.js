'use strict';

const { defineComponent, h } = require('vue');

const RatioOneToOne = defineComponent({
  name: 'RatioOneToOne',
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
          h('line', {"x1":"11.999999993611709","y1":"10.008779299956586","x2":"11.999999993611709","y2":"9.998779299956368"}),
          h('line', {"x1":"11.999999993611709","y1":"14.008779299956586","x2":"11.999999993611709","y2":"13.998779299956368"}),
          h('polyline', {"points":"6.999999993611709 14.998779299956368 6.999999993611709 8.998779299956368 5.999999993611709 8.998779299956368"}),
          h('polyline', {"points":"16.999999993611709 14.998779299956368 16.999999993611709 8.998779299956368 15.999999993611709 8.998779299956368"}),
          h('rect', {"x":"1.999999993611709","y":"3.998779299956368","width":"20","height":"16","rx":"1","ry":"1"})
        ]
      );
  }
});

module.exports = RatioOneToOne;
module.exports.RatioOneToOne = RatioOneToOne;
module.exports.default = RatioOneToOne;
