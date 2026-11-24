import { defineComponent, h } from 'vue';

const BookSearchCurved = defineComponent({
  name: 'BookSearchCurved',
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
          h('path', {"d":"M4 18L4 5C4 3.344 5.344 2 7 2L11 2"}),
          h('path', {"d":"M20 13L20 14"}),
          h('path', {"d":"M20 18L8 18"}),
          h('path', {"d":"M20 14L8 14C5.789 14 4 15.789 4 18C4 20.211 5.789 22 8 22L20 22"}),
          h('path', {"d":"M20 5.5C20 7.434 18.434 9 16.5 9C14.566 9 13 7.434 13 5.5C13 3.566 14.566 2 16.5 2C18.434 2 20 3.566 20 5.5Z"}),
          h('path', {"d":"M18.973 7.973L21 10"})
        ]
      );
  }
});

export default BookSearchCurved;
export { BookSearchCurved };
