'use strict';

const { defineComponent, h } = require('vue');

const SpinnerRays2 = defineComponent({
  name: 'SpinnerRays2',
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
          h('line', {"x1":"11.949462885142566","y1":"2.000000000480213","x2":"11.949462885142566","y2":"6.000000000480213"}),
          h('line', {"x1":"11.949462885142566","y1":"18.000000000480213","x2":"11.949462885142566","y2":"22.000000000480213"}),
          h('line', {"x1":"21.949462885140747","y1":"12.000000000480213","x2":"17.949462885142566","y2":"12.000000000480213"}),
          h('line', {"x1":"5.949462885142566","y1":"12.000000000480213","x2":"1.949462885142566","y2":"12.000000000480213"}),
          h('line', {"x1":"4.878395073435968","y1":"4.928932188453473","x2":"7.706822198118061","y2":"7.757359313261986"}),
          h('line', {"x1":"16.192103572164342","y1":"16.242640687691164","x2":"19.020530696848255","y2":"19.071067812503316"}),
          h('line', {"x1":"19.020530697166578","y1":"4.928932188773615","x2":"16.192103572358064","y2":"7.757359313454799"}),
          h('line', {"x1":"7.706822197927977","y1":"16.242640687501989","x2":"4.878395073115826","y2":"19.071067812183173"})
        ]
      );
  }
});

module.exports = SpinnerRays2;
module.exports.SpinnerRays2 = SpinnerRays2;
module.exports.default = SpinnerRays2;
