import { defineComponent, h } from 'vue';

const ChartLineSquareX = defineComponent({
  name: 'ChartLineSquareX',
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
          h('path', {"d":"M21.999999990599463,11.000000005347829v6c0,2.761423749150708-2.238576250839287,5-5,5H6.999999990599463c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000005347829c0-2.761423749150708,2.238576250850201-5,5-5h6"}),
          h('polyline', {"points":"6.999999990599463 15.000000005169568 9.999999990599463 11.000000005169568 13.999999990599463 14.000000005169568 16.999999990599463 10.000000005169568"}),
          h('line', {"x1":"17.999999990599463","y1":"6.000000005347829","x2":"21.999999990599463","y2":"2.000000005347829"}),
          h('line', {"x1":"21.999999990699507","y1":"6.000000005260517","x2":"17.999999990510332","y2":"2.000000005438778"})
        ]
      );
  }
});

export default ChartLineSquareX;
export { ChartLineSquareX };
