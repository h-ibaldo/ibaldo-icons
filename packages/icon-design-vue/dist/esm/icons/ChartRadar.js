import { defineComponent, h } from 'vue';

const ChartRadar = defineComponent({
  name: 'ChartRadar',
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
          h('path', {"d":"M22 9.641L12 13"}),
          h('path', {"d":"M18.18 22L12 13"}),
          h('path', {"d":"M5.82 22L12 13"}),
          h('path', {"d":"M2 9.641L12 13"}),
          h('path', {"d":"M12 2L12 13"}),
          h('path', {"d":"M7 20L4 10L12 4L21 10L16 19Z"})
        ]
      );
  }
});

export default ChartRadar;
export { ChartRadar };
