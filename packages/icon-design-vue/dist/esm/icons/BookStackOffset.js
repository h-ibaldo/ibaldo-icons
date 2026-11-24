import { defineComponent, h } from 'vue';

const BookStackOffset = defineComponent({
  name: 'BookStackOffset',
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
          h('path', {"d":"M18 6L4 6C2.895 6 2 5.105 2 4C2 2.895 2.895 2 4 2L18 2"}),
          h('path', {"d":"M6 10L20 10C21.105 10 22 10.895 22 12C22 13.105 21.105 14 20 14L6 14"}),
          h('path', {"d":"M18 22L4 22C2.895 22 2 21.105 2 20C2 18.895 2.895 18 4 18L18 18"})
        ]
      );
  }
});

export default BookStackOffset;
export { BookStackOffset };
