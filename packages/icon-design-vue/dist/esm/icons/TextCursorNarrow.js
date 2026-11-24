import { defineComponent, h } from 'vue';

const TextCursorNarrow = defineComponent({
  name: 'TextCursorNarrow',
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
          h('path', {"d":"M8 2L8.758 2C9.555 2 10.316 2.316 10.879 2.879L12 4L13.121 2.879C13.684 2.316 14.445 2 15.242 2L16 2"}),
          h('path', {"d":"M16 22L15.242 22C14.445 22 13.684 21.684 13.121 21.121L12 20L10.879 21.121C10.316 21.684 9.555 22 8.758 22L8 22"}),
          h('path', {"d":"M12 4L12 20"})
        ]
      );
  }
});

export default TextCursorNarrow;
export { TextCursorNarrow };
