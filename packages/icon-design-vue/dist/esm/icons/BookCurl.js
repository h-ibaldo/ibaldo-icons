import { defineComponent, h } from 'vue';

const BookCurl = defineComponent({
  name: 'BookCurl',
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
          h('path', {"d":"M18 18L6 18"}),
          h('path', {"d":"M2 18L2 5C2 3.344 3.344 2 5 2L16 2C17.105 2 18 2.895 18 4L18 12C18 13.105 17.105 14 16 14L6 14C3.789 14 2 15.789 2 18C2 20.211 3.789 22 6 22L20 22C21.105 22 22 21.105 22 20L22 9"})
        ]
      );
  }
});

export default BookCurl;
export { BookCurl };
