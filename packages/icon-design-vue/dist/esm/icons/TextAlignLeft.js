import { defineComponent, h } from 'vue';

const TextAlignLeft = defineComponent({
  name: 'TextAlignLeft',
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
          h('path', {"d":"M5 6L19 6"}),
          h('path', {"d":"M5 10L15 10"}),
          h('path', {"d":"M5 14L19 14"}),
          h('path', {"d":"M5 18L12 18"})
        ]
      );
  }
});

export default TextAlignLeft;
export { TextAlignLeft };
