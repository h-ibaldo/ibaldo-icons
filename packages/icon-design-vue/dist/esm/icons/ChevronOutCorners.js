import { defineComponent, h } from 'vue';

const ChevronOutCorners = defineComponent({
  name: 'ChevronOutCorners',
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
          h('path', {"d":"M22 6L22 5C22 3.344 20.656 2 19 2L18 2"}),
          h('path', {"d":"M6 2L5 2C3.344 2 2 3.344 2 5L2 6"}),
          h('path', {"d":"M2 18L2 19C2 20.656 3.344 22 5 22L6 22"}),
          h('path', {"d":"M18 22L19 22C20.656 22 22 20.656 22 19L22 18"}),
          h('path', {"d":"M10 4L12 2L14 4"}),
          h('path', {"d":"M14 20L12 22L10 20"}),
          h('path', {"d":"M4 14L2 12L4 10"}),
          h('path', {"d":"M20 10L22 12L20 14"})
        ]
      );
  }
});

export default ChevronOutCorners;
export { ChevronOutCorners };
