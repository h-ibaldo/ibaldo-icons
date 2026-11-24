import { defineComponent, h } from 'vue';

const BookStackTilted = defineComponent({
  name: 'BookStackTilted',
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
          h('path', {"d":"M3 15L2.707 14.121C2.254 12.762 2.359 11.281 3 10L11 2L22 4L14 12L3 10"}),
          h('path', {"d":"M22 9L14 17L3 15"}),
          h('path', {"d":"M22 14L14 22L3 20L2.707 19.121C2.254 17.762 2.359 16.281 3 15"})
        ]
      );
  }
});

export default BookStackTilted;
export { BookStackTilted };
