import { defineComponent, h } from 'vue';

const ChartLinePeakCircleX = defineComponent({
  name: 'ChartLinePeakCircleX',
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
          h('path', {"d":"M21.748596185923816,10.000000000749424c.131225585938409.646240234371362.200866699217841,1.31494140625.200866699217841,2,0,5.52294921875-4.4771728515625,10-10,10S1.949462885141656,17.522949219499424,1.949462885141656,12.000000000749424C1.949462885141656,6.477172852308286,6.426635736704156,2.000000000749424,11.949462885141656,2.000000000749424c.684997558595569,0,1.353698730470569.069580078121362,2,.200927734371362"}),
          h('line', {"x1":"17.949462885141656","y1":"6.000000000749424","x2":"21.949462885141656","y2":"2.000000000749424"}),
          h('line', {"x1":"21.949462885230787","y1":"6.000000000658474","x2":"17.949462885049797","y2":"2.000000000840373"}),
          h('polyline', {"points":"6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685"})
        ]
      );
  }
});

export default ChartLinePeakCircleX;
export { ChartLinePeakCircleX };
