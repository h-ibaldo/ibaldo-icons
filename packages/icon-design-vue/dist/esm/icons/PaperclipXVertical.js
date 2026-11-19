import { defineComponent, h } from 'vue';

const PaperclipXVertical = defineComponent({
  name: 'PaperclipXVertical',
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
          h('path', {"d":"M14 9L14 16C14 19.313 11.313 22 8 22C4.688 22 2 19.313 2 16L2 6C2 3.789 3.789 2 6 2C8.211 2 10 3.789 10 6L10 15C10 16.105 9.105 17 8 17C6.895 17 6 16.105 6 15L6 9"}),
          h('path', {"d":"M18 6L22 2"}),
          h('path', {"d":"M18 2L22 6"})
        ]
      );
  }
});

export default PaperclipXVertical;
export { PaperclipXVertical };
