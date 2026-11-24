import { defineComponent, h } from 'vue';

const ChartTrendUpSquareMinus = defineComponent({
  name: 'ChartTrendUpSquareMinus',
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
          h('path', {"d":"M21.949462885142566,9.000000000480213v8c0,2.761423749150708-2.238576250850201,5-5,5H6.949462885142566c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000480213c0-2.761423749150708,2.238576250850201-5,5-5h6"}),
          h('polyline', {"points":"6.949462885142566 16.000000000480213 9.949462885142566 13.000000000480213 11.949462885142566 15.000000000480213 16.949462885142566 10.000000000480213"}),
          h('polyline', {"points":"16.949462885142566 13.000000000480213 16.949462885142566 10.000000000480213 13.949462885142566 10.000000000480213"}),
          h('line', {"x1":"16.949462885142566","y1":"4.500000000571163","x2":"21.949462885053435","y2":"4.500000000480213"})
        ]
      );
  }
});

export default ChartTrendUpSquareMinus;
export { ChartTrendUpSquareMinus };
