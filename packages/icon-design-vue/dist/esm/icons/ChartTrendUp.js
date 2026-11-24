import { defineComponent, h } from 'vue';

const ChartTrendUp = defineComponent({
  name: 'ChartTrendUp',
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
          h('polyline', {"points":"2 18 10 11 14 15 22 7"}),
          h('polyline', {"points":"22 11 22 7 18 7"})
        ]
      );
  }
});

export default ChartTrendUp;
export { ChartTrendUp };
