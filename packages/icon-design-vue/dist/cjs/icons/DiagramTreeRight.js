'use strict';

const { defineComponent, h } = require('vue');

const DiagramTreeRight = defineComponent({
  name: 'DiagramTreeRight',
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
          h('rect', {"x":"1.949462885142566","y":"10.000000000480213","width":"6","height":"4"}),
          h('rect', {"x":"15.949462885142566","y":"4.000000000480213","width":"6","height":"4"}),
          h('rect', {"x":"15.949462885142566","y":"16.000000000480213","width":"6","height":"4"}),
          h('line', {"x1":"10.949462885142566","y1":"12.000000000480213","x2":"7.949462885142566","y2":"12.000000000480213"}),
          h('path', {"d":"M15.949462885142566,6.000000000480213h-2.279240779942484c-.430430408074244,0-.812569251680543.27543009486908-.948683298051037.683772233980562l-1.772075922006479,5.316227766019438"}),
          h('path', {"d":"M15.949462885142566,18.000000000480213h-2.279240779942484c-.430430408074244,0-.812569251680543-.27543009486908-.948683298051037-.683772233980562l-1.772075922006479-5.316227766019438"})
        ]
      );
  }
});

module.exports = DiagramTreeRight;
module.exports.DiagramTreeRight = DiagramTreeRight;
module.exports.default = DiagramTreeRight;
