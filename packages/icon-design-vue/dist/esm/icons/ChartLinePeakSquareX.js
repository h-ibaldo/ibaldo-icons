import { defineComponent, h } from 'vue';

const ChartLinePeakSquareX = defineComponent({
  name: 'ChartLinePeakSquareX',
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
          h('path', {"d":"M21.949462885141656,11.000000000927685v6c0,2.761423749150708-2.238576250847473,5-5,5H6.949462885141656c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000927685c0-2.76142374914707,2.238576250850201-5,5-5h6"}),
          h('line', {"x1":"17.949462885141656","y1":"6.000000000927685","x2":"21.949462885141656","y2":"2.000000000927685"}),
          h('line', {"x1":"21.949462885230787","y1":"6.000000000840373","x2":"17.949462885050707","y2":"2.000000001018634"}),
          h('polyline', {"points":"6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685"})
        ]
      );
  }
});

export default ChartLinePeakSquareX;
export { ChartLinePeakSquareX };
