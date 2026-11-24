import { defineComponent, h } from 'vue';

const BookBlock = defineComponent({
  name: 'BookBlock',
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
          h('path', {"d":"M19 21L7.5 21C6.117 21 5 19.883 5 18.5C5 17.117 6.117 16 7.5 16L19 16Z"}),
          h('path', {"d":"M5 18.5L5 5.5C5 4.117 6.117 3 7.5 3L19 3L19 16"})
        ]
      );
  }
});

export default BookBlock;
export { BookBlock };
