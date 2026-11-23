import { defineComponent, h } from 'vue';

const TextCursor = defineComponent({
  name: 'TextCursor',
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
          h('path', {"d":"M5 2L7.758 2C8.555 2 9.316 2.316 9.879 2.879L12 5L14.121 2.879C14.684 2.316 15.445 2 16.242 2L19 2"}),
          h('path', {"d":"M19 22L15.828 22C15.297 22 14.789 21.789 14.414 21.414L12 19L9.586 21.414C9.211 21.789 8.703 22 8.172 22L5 22"}),
          h('path', {"d":"M12 5L12 19"})
        ]
      );
  }
});

export default TextCursor;
export { TextCursor };
