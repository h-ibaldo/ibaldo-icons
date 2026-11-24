import { defineComponent, h } from 'vue';

const FlipHorizontal = defineComponent({
  name: 'FlipHorizontal',
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
          h('path', {"d":"M12 2L12 22"}),
          h('path', {"d":"M17 8L17 16L22 12Z"}),
          h('path', {"d":"M7 16L7 8L2 12Z"})
        ]
      );
  }
});

export default FlipHorizontal;
export { FlipHorizontal };
