import { defineComponent, h } from 'vue';

const ChartGanttBare = defineComponent({
  name: 'ChartGanttBare',
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
          h('path', {"d":"M12 12L2 12"}),
          h('path', {"d":"M19 18L6.965 18"}),
          h('path', {"d":"M22 6L10 6"})
        ]
      );
  }
});

export default ChartGanttBare;
export { ChartGanttBare };
