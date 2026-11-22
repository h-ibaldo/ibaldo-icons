import { defineComponent, h } from 'vue';

const ChartPieSlice = defineComponent({
  name: 'ChartPieSlice',
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
          h('path', {"d":"M12 12L12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M21.168 16C19.625 19.531 16.102 22 12 22C6.477 22 2 17.523 2 12C2 7.898 4.469 4.375 8 2.832"})
        ]
      );
  }
});

export default ChartPieSlice;
export { ChartPieSlice };
