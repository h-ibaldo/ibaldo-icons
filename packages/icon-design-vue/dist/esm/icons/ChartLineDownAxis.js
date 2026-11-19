import { defineComponent, h } from 'vue';

const ChartLineDownAxis = defineComponent({
  name: 'ChartLineDownAxis',
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
          h('polyline', {"points":"6 7 12 14 16 10 22 17"})
        ]
      );
  }
});

export default ChartLineDownAxis;
export { ChartLineDownAxis };
