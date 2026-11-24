'use strict';

const { defineComponent, h } = require('vue');

const BrowserChartArrow = defineComponent({
  name: 'BrowserChartArrow',
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
          h('rect', {"x":"1.999999993642632","y":"1.998779299954549","width":"20","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"1.999999993642632","y1":"7.998779299954549","x2":"21.999999993642632","y2":"7.998779299954549"}),
          h('line', {"x1":"5.00999999364285","y1":"4.998779299954549","x2":"4.999999993642632","y2":"4.998779299954549"}),
          h('line', {"x1":"8.00999999364285","y1":"4.998779299954549","x2":"7.999999993642632","y2":"4.998779299954549"}),
          h('line', {"x1":"18.999999993642632","y1":"4.998779299954549","x2":"10.999999993642632","y2":"4.998779299954549"}),
          h('polyline', {"points":"5.999999993642632 17.998779299954549 9.999999993642632 13.998779299945454 12.999999993642632 16.998779299954549 17.999999993642632 11.998779299954549"}),
          h('polyline', {"points":"14.999999993640813 11.998779299954549 17.999999993640813 11.998779299954549 17.999999993640813 14.998779299954549"})
        ]
      );
  }
});

module.exports = BrowserChartArrow;
module.exports.BrowserChartArrow = BrowserChartArrow;
module.exports.default = BrowserChartArrow;
