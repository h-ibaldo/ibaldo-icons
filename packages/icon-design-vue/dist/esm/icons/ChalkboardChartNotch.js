import { defineComponent, h } from 'vue';

const ChalkboardChartNotch = defineComponent({
  name: 'ChalkboardChartNotch',
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
          h('path', {"d":"M2 5L2 19L12 19L12 18C12 17.445 12.445 17 13 17L17 17C17.555 17 18 17.445 18 18L18 19L22 19L22 5Z"}),
          h('path', {"d":"M7 14L11 10L14 12L17 9"})
        ]
      );
  }
});

export default ChalkboardChartNotch;
export { ChalkboardChartNotch };
