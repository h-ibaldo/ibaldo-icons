import { defineComponent, h } from 'vue';

const ChartLinePeakSquarePlus = defineComponent({
  name: 'ChartLinePeakSquarePlus',
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
          h('path', {"d":"M21.949462885142566,11.000000000927685v6c0,2.761423749150708-2.238576250845654,5-5,5H6.949462885142566c-2.761423749150708,0-5-2.238576250849292-5-5V7.000000000927685c0-2.76142374914707,2.238576250849292-5,5-5h6"}),
          h('polyline', {"points":"6.949462885142566 12.000000000927685 9.949462885142566 16.000000000927685 13.949462885142566 8.000000000927685 16.949462885142566 12.000000000927685"}),
          h('line', {"x1":"19.449462885142566","y1":"7.000000000927685","x2":"19.449462885056164","y2":"2.000000001018634"}),
          h('line', {"x1":"16.949462885142566","y1":"4.500000001018634","x2":"21.949462885050707","y2":"4.500000000927685"})
        ]
      );
  }
});

export default ChartLinePeakSquarePlus;
export { ChartLinePeakSquarePlus };
