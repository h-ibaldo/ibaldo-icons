import { defineComponent, h } from 'vue';

const ChartLinePeakCircleMinus = defineComponent({
  name: 'ChartLinePeakCircleMinus',
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
          h('polyline', {"points":"7 12 10 16 14 8 17 12"}),
          h('line', {"x1":"17","y1":"5","x2":"21.999999999909051","y2":"4.999999999909051"}),
          h('path', {"d":"M13,2.05047607421875c-.328857421869543-.03289794921875-.662353515619543-.05047607421875-1-.05047607421875C6.47705078125,2,2,6.4771728515625,2,12c0,5.52294921875,4.47705078125,10,10,10s10-4.47705078125,10-10c0-.68505859375-.069580078119543-1.353759765625-.200927734369543-2"})
        ]
      );
  }
});

export default ChartLinePeakCircleMinus;
export { ChartLinePeakCircleMinus };
