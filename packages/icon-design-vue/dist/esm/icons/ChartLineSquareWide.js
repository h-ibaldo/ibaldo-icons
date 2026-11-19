import { defineComponent, h } from 'vue';

const ChartLineSquareWide = defineComponent({
  name: 'ChartLineSquareWide',
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
          h('rect', {"x":"2","y":"2","width":"20","height":"20","rx":"5","ry":"5"}),
          h('polyline', {"points":"2 16 8 11 12 15 22 7"})
        ]
      );
  }
});

export default ChartLineSquareWide;
export { ChartLineSquareWide };
