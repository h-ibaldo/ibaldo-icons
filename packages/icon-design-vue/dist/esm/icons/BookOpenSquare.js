import { defineComponent, h } from 'vue';

const BookOpenSquare = defineComponent({
  name: 'BookOpenSquare',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M12 9L12 18"}),
          h('path', {"d":"M12 9C11.387 7.773 10.133 7 8.766 7L6 7L6 16L8.766 16C10.133 16 11.387 16.773 12 18"}),
          h('path', {"d":"M12 9C12.613 7.773 13.867 7 15.234 7L18 7L18 16L15.234 16C13.867 16 12.613 16.773 12 18"})
        ]
      );
  }
});

export default BookOpenSquare;
export { BookOpenSquare };
