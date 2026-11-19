import { defineComponent, h } from 'vue';

const PaperclipSquareOpenThin = defineComponent({
  name: 'PaperclipSquareOpenThin',
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
          h('path', {"d":"M16 10L20.379 5.621C21.207 4.793 21.207 3.449 20.379 2.621C19.551 1.793 18.207 1.793 17.379 2.621L12.035 7.965C10.656 9.344 10.656 11.586 12.035 12.965C13.414 14.344 15.656 14.344 17.035 12.965L21 9"}),
          h('path', {"d":"M22 14L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L12 2"})
        ]
      );
  }
});

export default PaperclipSquareOpenThin;
export { PaperclipSquareOpenThin };
