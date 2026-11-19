import { defineComponent, h } from 'vue';

const ChartBarPeakJoinedAxis = defineComponent({
  name: 'ChartBarPeakJoinedAxis',
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
          h('polyline', {"points":"2 2 2 22 22 22"}),
          h('polyline', {"points":"5 22 5 13 10 13 10 4 15 4 15 9 20 9 20 22"}),
          h('line', {"x1":"10","y1":"13","x2":"10","y2":"22"}),
          h('line', {"x1":"15","y1":"9","x2":"15","y2":"22"})
        ]
      );
  }
});

export default ChartBarPeakJoinedAxis;
export { ChartBarPeakJoinedAxis };
