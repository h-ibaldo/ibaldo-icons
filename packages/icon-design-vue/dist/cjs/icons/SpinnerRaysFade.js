'use strict';

const { defineComponent, h } = require('vue');

const SpinnerRaysFade = defineComponent({
  name: 'SpinnerRaysFade',
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
          h('line', {"x1":"21.949462885140747","y1":"12.000000000480213","x2":"16.949462885140747","y2":"12.000000000480213"}),
          h('line', {"x1":"19.020530697163849","y1":"19.071067812186811","x2":"15.484996791152298","y2":"15.535533906331693"}),
          h('line', {"x1":"11.949462885142566","y1":"20.000000000480213","x2":"11.949462885142566","y2":"22.000000000480213"}),
          h('line', {"x1":"6.292608635778379","y1":"17.65685425009724","x2":"4.878395073435968","y2":"19.071067812503316"}),
          h('line', {"x1":"1.949462885144385","y1":"12.000000000029104","x2":"4.949462885142566","y2":"12.000000000163709"}),
          h('line', {"x1":"4.878395073435968","y1":"4.928932188457111","x2":"6.999715416946856","y2":"7.050252532062586"}),
          h('line', {"x1":"11.949462885142566","y1":"2.000000000480213","x2":"11.949462885142566","y2":"6.000000000480213"}),
          h('line', {"x1":"19.020530697165668","y1":"4.928932188773615","x2":"16.192103572356245","y2":"7.757359313454799"})
        ]
      );
  }
});

module.exports = SpinnerRaysFade;
module.exports.SpinnerRaysFade = SpinnerRaysFade;
module.exports.default = SpinnerRaysFade;
