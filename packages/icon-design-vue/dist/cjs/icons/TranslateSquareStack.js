'use strict';

const { defineComponent, h } = require('vue');

const TranslateSquareStack = defineComponent({
  name: 'TranslateSquareStack',
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
          h('polygon', {"points":"14.025268548975873 6.997565476121054 14.025268548975873 1.997565476121054 2.025268548975873 1.997565476121054 2.025268548975873 16.997565476121054 10.025268548975873 16.997565476121054 10.025268548975873 21.997565476121054 22.025268548975873 21.997565476121054 22.025268548975873 6.997565476121054 14.025268548975873 6.997565476121054"}),
          h('path', {"d":"M17.025268548975873,13.997565476117416c-2,1-3,2.000000000003638-3,3.000000000003638,0,2,2,2,4,2"}),
          h('path', {"d":"M17.025268548975873,10.997565476121054c-1.236875890319425-.590576526228688-1.999996185319105.375003337860107-2,1-.000003814709999.625001430500561.147852331750983,1.147852331781905,2,2"}),
          h('polyline', {"points":"5.025268548975873 12.997565476121054 8.025268548975873 4.997565476121054 11.025268548975873 12.997565476121054"}),
          h('line', {"x1":"6.025268548975873","y1":"10.997565476121054","x2":"10.025268548975873","y2":"10.997565476121054"})
        ]
      );
  }
});

module.exports = TranslateSquareStack;
module.exports.TranslateSquareStack = TranslateSquareStack;
module.exports.default = TranslateSquareStack;
