'use strict';

const { defineComponent, h } = require('vue');

const CheckCircleStack = defineComponent({
  name: 'CheckCircleStack',
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
          h('circle', {"cx":"9.474731440090181","cy":"9.500000003874447","r":"7.5"}),
          h('polyline', {"points":"6.474731440090181 9.500000003874447 8.474731440090181 11.500000003874447 12.474731440090181 7.500000003874447"}),
          h('path', {"d":"M16.6513671822795,7.323364261686947c3.080200195310681.93310546875,5.323364257810681,3.791809082027612,5.323364257810681,7.1766357421875,0,4.142150878913526-3.357849121090112,7.5-7.5,7.5-3.384826660159888,0-6.243530273440228-2.2431640625-7.176635742190228-5.323364257808862"})
        ]
      );
  }
});

module.exports = CheckCircleStack;
module.exports.CheckCircleStack = CheckCircleStack;
module.exports.default = CheckCircleStack;
