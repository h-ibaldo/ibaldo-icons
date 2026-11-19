'use strict';

const { defineComponent, h } = require('vue');

const BellCheckFlat = defineComponent({
  name: 'BellCheckFlat',
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
          h('path', {"d":"M13.974731449499814,17.000000000480213v2.000002000000677c0,1.104568395086972-.895429604909623,1.999997999999323-1.999997999999323,1.999997999999323h-.000004000000445c-1.1045683950897,0-1.999998000000232-.895429604912351-1.999998000000232-1.999997999999323v-2.000002000000677"}),
          h('line', {"x1":"19.974731449499814","y1":"17.000000000480213","x2":"3.974731449499814","y2":"17.000000000480213"}),
          h('path', {"d":"M17.974731449499814,17.000000000480213v-7.000006000002031c0-3.313705185279105-2.686288814719774-5.999993999997969-5.999993999999788-5.999993999997969h-.000012000000424c-3.313705185279105,0-5.999993999999788,2.686288814718864-5.999993999999788,5.999993999997969v7.000006000002031"}),
          h('line', {"x1":"11.974731449499814","y1":"2.000000000480213","x2":"11.974731449499814","y2":"4.000000000480213"}),
          h('polyline', {"points":"9.974731449499814 11.000000000480213 11.474731449499814 12.500000000480213 13.974731449499814 10.000000000480213"})
        ]
      );
  }
});

module.exports = BellCheckFlat;
module.exports.BellCheckFlat = BellCheckFlat;
module.exports.default = BellCheckFlat;
