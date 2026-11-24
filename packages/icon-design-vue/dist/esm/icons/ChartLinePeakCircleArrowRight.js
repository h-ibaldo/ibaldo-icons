import { defineComponent, h } from 'vue';

const ChartLinePeakCircleArrowRight = defineComponent({
  name: 'ChartLinePeakCircleArrowRight',
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
          h('polyline', {"points":"5.949462885141656 18.000000000749424 7.949462885141656 20.000000000749424 5.949462885141656 22.000000000749424"}),
          h('line', {"x1":"1.949462885141656","y1":"20.000000000749424","x2":"7.949462885141656","y2":"20.000000000749424"}),
          h('path', {"d":"M11.949462885141656,22.000000000749424c5.5228271484375,0,10-4.477172851558862,10-10,0-5.52294921875-4.4771728515625-10-10-10S1.949462885141656,6.477050781999424,1.949462885141656,12.000000000749424c0,1.04541015625.161682128907159,2.052734375.459228515625,3"}),
          h('polyline', {"points":"6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685"})
        ]
      );
  }
});

export default ChartLinePeakCircleArrowRight;
export { ChartLinePeakCircleArrowRight };
