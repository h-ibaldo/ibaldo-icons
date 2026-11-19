import { defineComponent, h } from 'vue';

const PaperclipSquareOpenShort = defineComponent({
  name: 'PaperclipSquareOpenShort',
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
          h('path', {"d":"M14 11L19.379 5.621C20.207 4.793 20.207 3.449 19.379 2.621C18.551 1.793 17.207 1.793 16.379 2.621L10.242 8.758C8.586 10.414 8.586 13.102 10.242 14.758C11.898 16.414 14.586 16.414 16.242 14.758L20 11"}),
          h('path', {"d":"M22 15L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L11 2"})
        ]
      );
  }
});

export default PaperclipSquareOpenShort;
export { PaperclipSquareOpenShort };
