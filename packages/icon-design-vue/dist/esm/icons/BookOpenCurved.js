import { defineComponent, h } from 'vue';

const BookOpenCurved = defineComponent({
  name: 'BookOpenCurved',
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
          h('path', {"d":"M12 21L12 7"}),
          h('path', {"d":"M12 21C10 18 5 17 2 17L2 3C5 3 10 4 12 7"}),
          h('path', {"d":"M12 21C14 18 19 17 22 17L22 3C19 3 14 4 12 7"})
        ]
      );
  }
});

export default BookOpenCurved;
export { BookOpenCurved };
