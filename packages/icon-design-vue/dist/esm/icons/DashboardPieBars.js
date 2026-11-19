import { defineComponent, h } from 'vue';

const DashboardPieBars = defineComponent({
  name: 'DashboardPieBars',
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
          h('path', {"d":"M12 7C12 4.238 9.762 2 7 2C4.238 2 2 4.238 2 7C2 9.762 4.238 12 7 12C9.762 12 12 9.762 12 7Z"}),
          h('path', {"d":"M7 2L7 7L12 7"}),
          h('path', {"d":"M6 18L2 18L2 22L6 22Z"}),
          h('path', {"d":"M10 16L6 16L6 22L10 22Z"}),
          h('path', {"d":"M14 18L10 18L10 22L14 22Z"}),
          h('path', {"d":"M18 13L14 13L14 22L18 22Z"}),
          h('path', {"d":"M22 6L18 6L18 22L22 22Z"})
        ]
      );
  }
});

export default DashboardPieBars;
export { DashboardPieBars };
