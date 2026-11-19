import { defineComponent, h } from 'vue';

const ChartLinePeakAxis = defineComponent({
  name: 'ChartLinePeakAxis',
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
          h('polyline', {"points":"7 10 11 16 17 4 21 10"}),
          h('polyline', {"points":"2 2 2 22 22 22"})
        ]
      );
  }
});

export default ChartLinePeakAxis;
export { ChartLinePeakAxis };
