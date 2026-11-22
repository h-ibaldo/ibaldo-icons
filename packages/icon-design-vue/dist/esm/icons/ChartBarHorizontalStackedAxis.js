import { defineComponent, h } from 'vue';

const ChartBarHorizontalStackedAxis = defineComponent({
  name: 'ChartBarHorizontalStackedAxis',
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
          h('path', {"d":"M2 2L2 22L22.023 22"}),
          h('path', {"d":"M15 5L15 9L6 9L6 5Z"}),
          h('path', {"d":"M19 13L19 17L6 17L6 13Z"}),
          h('path', {"d":"M11 5L11 9"}),
          h('path', {"d":"M15 13L15 17"})
        ]
      );
  }
});

export default ChartBarHorizontalStackedAxis;
export { ChartBarHorizontalStackedAxis };
