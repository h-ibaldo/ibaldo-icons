import { defineComponent, h } from 'vue';

const BookNote = defineComponent({
  name: 'BookNote',
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
          h('path', {"d":"M18 17L6 17C4.895 17 4 17.895 4 19C4 20.105 4.895 21 6 21L18 21"}),
          h('path', {"d":"M18 17L18 13"}),
          h('path', {"d":"M10 3L6 3C4.895 3 4 3.895 4 5"}),
          h('path', {"d":"M4 5L4 19"}),
          h('path', {"d":"M21 10.949C21 12.082 20.082 13 18.949 13"}),
          h('path', {"d":"M18.789 13L12.211 13C10.988 13 10 12.012 10 10.789L10 4.211C10 2.988 10.988 2 12.211 2L18.789 2C20.012 2 21 2.988 21 4.211L21 10.789C21 12.012 20.012 13 18.789 13Z"}),
          h('path', {"d":"M15 13C15 9.688 17.688 7 21 7"})
        ]
      );
  }
});

export default BookNote;
export { BookNote };
