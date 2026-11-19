import { defineComponent, h } from 'vue';

const BookOpenCoverCircle = defineComponent({
  name: 'BookOpenCoverCircle',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M6 9C7.656 7.668 10.344 7.668 12 9"}),
          h('path', {"d":"M12 9C13.656 7.668 16.344 7.668 18 9"}),
          h('path', {"d":"M6 16C7.656 14.668 10.344 14.668 12 16"}),
          h('path', {"d":"M12 16C13.656 14.668 16.344 14.668 18 16"}),
          h('path', {"d":"M12 9L12 16"}),
          h('path', {"d":"M6 9L6 16"}),
          h('path', {"d":"M18 9L18 16"})
        ]
      );
  }
});

export default BookOpenCoverCircle;
export { BookOpenCoverCircle };
